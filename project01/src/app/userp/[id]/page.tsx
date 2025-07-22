"use client";
import React, { useState } from "react";
type props = {
  params: {
    id: string;
  };
};
const UserDynamicPage = ({ params }: props) => {
  //   useEffect(() => {})[];
  // const [loading, setLoading] = useState(true);
  const response = fetch(`http://localhost:5000/api/user/get`);
  console.log(response);
  return (
    <div>
      UserDynamicPage
      <h1>{params.id}</h1>
    </div>
  );
};

export default UserDynamicPage;
