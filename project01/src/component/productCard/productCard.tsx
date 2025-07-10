"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type props = {
  name: string;
  image: string;
  details: string;
};
const ProductCard: React.FC<props> = ({ name, image, details }) => {
  const productId = "1234";
  const router = useRouter();
  const handelSubmit = () => {
    router.push(`/product/${productId}`);
  };
  return (
    <div className="w-full p-8 flex justify-between ">
      <div className="broder bg-blue-600 rounded-lg">
        <div className="p-2">
          <div>
            <Image
              src={image}
              alt={"Image of product"}
              className="object-fill p-2"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full flex justify-center">
            <strong>
              <p className="text-white">Name: {name}</p>
            </strong>
          </div>
          <div className="text-white">
            <p>Details: {details}</p>
          </div>
          <div className="flex justify-center p-2">
            <button
              className=" text-2xl bg-amber-600 p-4 w-full rounded-lg cursor-pointer hover:bg-amber-500 text-white"
              onClick={handelSubmit}
            >
              SeeProduct
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
