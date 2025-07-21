"use client";

import React from "react";

const UploadInCloudinary = () => {
  const handleFile = async (event) => {
    const file = event.target.value;
    if (!file) {
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first_cloudinary_project");
    data.append("cloud_name", "dpovu7uqg");
    console.log(file);
    const response = await fetch(
      " https://api.cloudinary.com/v1_1/dpovu7uqg/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const uploadImage = await response.json();
    console.log(uploadImage);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} className="file-input" />
    </div>
  );
};

export default UploadInCloudinary;
