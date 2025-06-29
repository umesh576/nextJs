import { IuserData } from "@/interface/userData";
import React from "react";

const UserCard = (userDetal: IuserData) => {
  console.log("userDetal", userDetal);
  return (
    <div>
      <div>
        <p>Name: {userDetal.firstName} joshi</p>
        <p>address : ktm </p>
        <p>email: uj19343@gmail.com</p>
        <p>gender: male</p>
        <p>PhoneNumber: 56655865</p>
        <p>Role</p>
        <p>skill: safsdah</p>
      </div>
    </div>
  );
};

export default UserCard;
