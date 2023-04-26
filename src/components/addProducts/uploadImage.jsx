import React, { useState } from "react";

const ImageUploader = ({ onChange }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  onChange = console.log("first", onChange);
  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/bmp",
    "image/svg+xml",
    "image/webp",
  ];
  const maxFileSize = 1000000; // 1MB in bytes

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    onChange = { onChange };
    if (selectedFile) {
      // File type validation
      if (!allowedFileTypes.includes(selectedFile.type)) {
        setError(
          "Invalid file type. Please upload a JPG, PNG, BMP, SVG, or WEBP file."
        );
        setFile(null);
        return;
      }

      // File size validation
      if (selectedFile.size > maxFileSize) {
        setError("File size exceeds the limit of 1MB.");
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setError(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {error && <div>{error}</div>}
      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>File size: {file.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
