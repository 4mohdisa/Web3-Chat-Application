import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useMoralis } from "react-moralis";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const Login = () => {
  const { authenticate } = useMoralis();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x616161,
          backgroundColor: 0x0,
          points: 10.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect);
    };
  }, [vantaEffect]);
  return (
    <div className="bg-black relative">
      <h1>login</h1>

      <div className="flex flex-col absolute z-50  h-4/6 items-center justify-center w-full space-y-3">
        <Image
          className="object-cover bg-black/30 backdrop-blur-md rounded-full"
          height={150}
          width={150}
          src="/favicon.png"
        />

        <button
          onClick={authenticate}
          className="bg-black/40 transition-all tracking-widest hover:bg-black/70 backdrop-blur-md p-3 text-lg rounded-lg font-semibold text-white"
        >
          Login to the Metaverse
        </button>
      </div>
      <div ref={vantaRef} className="w-full h-screen">
        {/* <Image
          layout="fill"
          objectFit="cover"
          src="https://links.papareact.com/55n"
        /> */}
        {/* <div className="fixed top-0 left-0 w-full h-full bg-black/20" /> */}
      </div>
    </div>
  );
};

export default Login;
