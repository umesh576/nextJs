"use client";
import React from "react";
// import Button from "@/component/button";
import ProductCard from "./../../component/productCard/productCard";
const RandomFile = () => {
  return (
    <div>
      <h1>this is new page</h1>
      <ProductCard
        name="computer science"
        image="vercel.svg"
        details="this is amazing prodict in it sector"
      />
    </div>
  );
};

export default RandomFile;
