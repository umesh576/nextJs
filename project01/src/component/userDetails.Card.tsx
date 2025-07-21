"use client";
import React from "react";
import { useRouter } from "next/navigation";
type User = {
  _id: string;
  Name: string;
  age: number;
  contact: number;
  createdAt: string;
};

type props = {
  userDetails: User[];
};

const UserDetailsCard: React.FC<props> = ({ userDetails }) => {
  //   console.log(userDetails);
  const router = useRouter();
  const handleClicked = (id: string) => {
    router.push(`/userp/${id}`);
  };
  return (
    <div className="flex w-full justify-center">
      <div className=" p-4 bg-blue flex gap-3">
        {userDetails.map((user, index) => (
          <div className="p-2 border" key={user._id}>
            <p>Name: {user.Name}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
            {/* {index !== userDetails.length - 1 && <hr className="my-2" />} */}
            <p>{index}</p>
            <div className="w-full flex justify-center">
              <button
                className="bg-blue-500 p-3 w-full rounded-lg cursor-pointer hover:bg-blue-400"
                onClick={() => {
                  handleClicked(user._id);
                }}
              >
                Click for full details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsCard;
