"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, isLogin] = useState(false);

  const formData = {
    email,
    password,
  };
  const handelSubmit = async (e: FormEvent) => {
    console.log(e);
    console.log(formData);
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log(
        "Sending request to:",
        "http://localhost:5000/api/user/login"
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("hey umesh ");
      } else {
        toast.error("Not login", data.meesage);
      }
    } catch (e: unknown) {
      console.log(e);
      toast.error("somethind wrong in login");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold">Login for use premium feature.</h1>
        <div>
          <form
            onSubmit={handelSubmit}
            className="border-black mt-10 flex justify-center"
          >
            <div>
              <div>
                <label htmlFor="#"></label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@Doegmail.com"
                  className="outline-1 p-2 "
                />
              </div>
              <div className="mt-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password: "
                  className="outline-1 p-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="cursor-pointer border-black p-3 bg-blue-400 text-white text-lg rounded-lg px-10 mt-5"
                  // onClick={handelSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
