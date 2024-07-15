// pages/upload.tsx

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Detect() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError('Please select an image file.');
      return;
    }

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
          responseType: 'blob', // Ensure response type is blob for binary data
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

  return (
    <div>
      <h1>Object Detection</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload and Detect'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {imageUrl && (
        <div>
          <h2>Annotated Image:</h2>
          <img src={imageUrl} alt="Annotated" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}
