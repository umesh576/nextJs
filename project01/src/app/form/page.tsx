"use client";
import React, { FormEvent } from "react";

const Form: React.FC = () => {
  const handelForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const obj = Object.fromEntries(fromData.entries());
    console.log(obj);
  };
  return (
    <form action="" onSubmit={handelForm}>
      <div>
        <input type="text" name="name" placeholder="name: Umesh" />
        <input type="number" name="number" placeholder="Number: 984956" />
        <input type="text" name="Address" placeholder="Address: ktm/kailali" />
        <div className="flex justify-center py-5">
          <button
            type="submit"
            className="p-4 bg-blue-700 text-white text-lg font-bold rounded-lg"
          >
            submit form
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
