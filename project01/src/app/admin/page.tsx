"use client";

type User = {
  _id: string;
  Name: string;
  age: number;
  contact: number;
  createdAt: string;
};

import UserDetailsCard from "@/component/userDetails.Card";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [isuser, setIsUser] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<User[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const user = await response.json();
        const userData = user.data;
        setUserDetails(userData);
        // console.log(user.data[0]);

        setIsUser(true);
        toast("User fetched successfully");
      } catch (error) {
        console.error("Fetch error:", error);
        toast("Failed to fetch user");
      }
    };

    checkUser();
  }, []);

  return (
    <div>
      {!isuser && <p>loading...</p>}
      {isuser && <UserDetailsCard userDetails={userDetails} />}
    </div>
  );
};

export default Page;
