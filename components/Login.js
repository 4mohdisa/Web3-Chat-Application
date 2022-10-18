import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>login</h1>

      <div className="flex flex-col absolute z-50  h-4/6 items-center justify-center w-full space-y-3">
        <Image
          className="object-cover"
          height={150}
          width={150}
          src="/344772-84.png"
        />

        <button
          onClick={authenticate}
          className="bg-black/80 transition-all tracking-widest hover:bg-black/70 backdrop-blur-md p-3 text-lg rounded-lg font-semibold text-white"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://links.papareact.com/55n"
        />
      </div>
    </div>
  );
};

export default Login;
