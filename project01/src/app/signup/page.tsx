"use client";

import { useState } from "react";
// import api from "./api/api.axios";
import api from "../api/api.axios";
import React from "react";

export default function Home() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  // const [conformPassword, setConformpassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobType, setJobType] = useState("");

  const handelSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const signUpData = {
      firstName,
      lastName,
      password,
      // conformPassword,
      email,
      phoneNumber,
      jobType,
    };
    console.log(signUpData);

    const res = await api.post("/api/user/register", signUpData);
    console.log(res);
    // const res = await resizeBy.
    // res.json({ message: "Registered" });
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (firstName) {
  //       console.log("searching for:", firstName);
  //     }
  //   }, 500);
  //   return clearTimeout(timer);
  // }, [firstName]);
  //   console.log(firstName);
  // };
  // handelSubmit();
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
      <div>
        <h1>form for sub mission</h1>
        <form className="border-1 border-red-500 p-5">
          <div className="w-90% border-1 p-5">
            <div>
              <input
                type="text"
                className="border-1 m-3"
                placeholder="Enter first name"
                name="firstName"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="border-1 m-3"
                placeholder="Enter last name"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                className="border-1 m-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="conformPassword"
                placeholder="Conform password"
                className="border-1 m-3 mt-0 "
                // onChange={(e) => setConformpassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="border-1 m-3 mt-0 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="Number"
                name="phoneNumber"
                placeholder="Enter Number:"
                className="border-1 m-3 mt-0 "
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="jobType"
                id="jobtype"
                placeholder="Select job type"
                className="border-1 m-3 mt-0 "
                onChange={(e) => setJobType(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <button
              className="p-3 bg-blue-300 rounded-lg px-5 cursor-pointer hover:bg-blue-400"
              // type="submit"
              onClick={handelSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
