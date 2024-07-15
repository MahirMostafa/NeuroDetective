from flask import Flask, request, jsonify, send_file
from flask_cors import CORS, cross_origin
from datetime import datetime
import os
import cv2
from ultralytics import YOLO
import logging

app = Flask(__name__)
CORS(app)

# Load YOLO model
YOLO_MODEL_PATH = "best.pt"
model = YOLO(YOLO_MODEL_PATH)

classNames = ["glioma", "meningioma", "pituitary"]

@app.route('/detect_objects', methods=['POST'])
@cross_origin()
def detect_objects():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400

        image_file = request.files['image']

        temp_path = "temp_image.jpg"
        image_file.save(temp_path)

        results = model(temp_path, stream=True)

        img = cv2.imread(temp_path)

        for r in results:
            for box in r.boxes:
                x1, y1, x2, y2 = box.xyxy[0]
                cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (255, 0, 255), 3)

                conf = round(float(box.conf[0]), 2)
                cls = int(box.cls[0])
                class_name = classNames[cls]
                label = f'{class_name} {conf}'

                t_size = cv2.getTextSize(label, 0, fontScale=1, thickness=2)[0]
                c2 = (int(x1 + t_size[0]), int(y1 - t_size[1] - 3))

                cv2.rectangle(img, (int(x1), int(y1)), c2, [255, 0, 255], -1, cv2.LINE_AA)  # filled
                cv2.putText(img, label, (int(x1), int(y1 - 2)), 0, 1, [255, 255, 255], thickness=1, lineType=cv2.LINE_AA)

        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        image_name = f"annotated_{timestamp}.jpg"
        base_directory = "Uploads"  # Update with your actual directory
        path = os.path.join(base_directory, image_name)

        cv2.imwrite(path, img)

        os.remove(temp_path)

        if os.path.exists(path):
            return send_file(path, mimetype='image/jpeg')
        else:
            return jsonify({'error': 'Annotated image could not be saved.'}), 500

    except Exception as e:
        logging.exception("An error occurred during object detection:")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=False)
