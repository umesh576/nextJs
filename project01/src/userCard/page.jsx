import React from "react";
// import ListCard from "../../component/list-card";
import ListCard from "@/component/list-card";

const UserList = () => {
  const std_details = [
    {
      name: "umesh",
      address: "ktm",
      collage: "hwic",
    },
    {
      name: "umesh",
      address: "ktm",
      collage: "hwic",
    },
  ];
  return (
    <div>
      <ListCard stdDetails={std_details} />
    </div>
  );
};

export default UserList;
