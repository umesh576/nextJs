import React from "react";

const Uploadimage = () => {
  return (
    <div>
      <form
        action="http://localhost:5000/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="profileImage" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uploadimage;
