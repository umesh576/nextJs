import React from "react";

type props = {
  params: {
    id: string;
  };
};
const Product = ({ params }: props) => {
  return <div>the id of the product is :{params.id}</div>;
};

export default Product;
