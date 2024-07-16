import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'; // Replace with your actual icon components

export default function Detect() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropAccepted = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      setLoading(true);
      const response = await axios.post<Blob>(
        'http://localhost:5001/detect_objects',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob',
        }
      );

      const url = URL.createObjectURL(response.data);
      setImageUrl(url);
      setError('');
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    //accept: ['image/png', 'image/jpeg', 'image/jpg'],
    onDragEnter: () => setIsDragOver(true),
    onDragLeave: () => setIsDragOver(false),
  });

  return (
    <div className="container mx-auto p-4">
      <div
        className="h-full w-full flex-1 flex flex-col items-center border-2 border-dashed rounded-lg"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragOver ? (
          <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
        ) : loading ? (
          <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
        ) : (
          <Image className="h-6 w-6 text-zinc-500 mb-2" />
        )}
        <p className="text-center">
          Drag & drop the MRI image file here, or click to select one
        </p>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Annotated Image:</h2>
          <img src={imageUrl} alt="Annotated" className="max-w-full mb-4" />
        </div>
      )}
    </div>
  );
}
