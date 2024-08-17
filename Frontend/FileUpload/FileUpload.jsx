import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './FileUpload.css';

const FileUpload = ({ setfunc }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Uploading your document...", { autoClose: false });

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setfunc(response.data);
      toast.dismiss();
      toast.success("Document Uploaded successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("There was an error summarizing the document.");
      console.error("There was an error uploading the file!", error);
    }
  };

  return (
    <div className="file-upload-container">
      <h1>Upload a Document to Practice</h1>
      <form onSubmit={handleSubmit} className="file-upload-form">
        <div className="input-wrapper">
          <input type="file" onChange={handleFileChange} required className="file-input" />
          <button type="submit" className="upload-button" disabled={!file}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon">
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
            </svg>
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
