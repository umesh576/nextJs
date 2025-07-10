import React, { useState } from "react";

const Page = async () => {
  const [isuser, setIsUser] = useState(false);
  try {
    const response = await fetch();
  } catch (error) {
    console.log(error);
  }
  return <div>page</div>;
};

export default Page;
