import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-2 z-50 bg-black/30 backdrop-blur-md shadow-sm border-b-1 border-white text-gray-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-cover"
            src="/favicon.png"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="h-24 w-24 relative lg:mx-auto border-gray-500 border-4 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
