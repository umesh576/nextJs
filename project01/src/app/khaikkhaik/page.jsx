"use client";

import React, { useState } from "react";

const UploadInCloudinary = () => {
  const [error, setError] = useState(null);

  const handleFile = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your actual upload preset
    formData.append("cloud_name", "dpovu7uqg"); // Your cloud name

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpovu7uqg/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Upload failed");
      }

      console.log("Upload successful:", data);
      // data contains the Cloudinary response with URL, public_id, etc.
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} className="file-input" />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default UploadInCloudinary;
