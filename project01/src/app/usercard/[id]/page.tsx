import React from "react";
import Image from "next/image";

type props = {
  params: {
    id: string;
  };
};

const UserDynamicPage = ({ params }: props) => {
  return (
    <div>
      <h1>View student details</h1>
      <div>
        <div>
          <Image src={} alt={} width={1000} height={1000} />
          <h1>{params}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDynamicPage;
