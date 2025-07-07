import React from "react";

const ListCard = ({ stdDetails }) => {
  console.log("umesh", typeof stdDetails);
  return (
    <div className="flex justify-center items-center gap-10 h-screen">
      {stdDetails.map((student, index) => (
        <div className="p-10 border-black border" key={index}>
          <h1 className="text-2xl">Student Details</h1>
          <div className="mt-1">
            <p>Name: {student.name}</p>
            <p>Address: {student.address}</p>
            <p>Collage: {student.collage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
