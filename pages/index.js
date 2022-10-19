import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Home() {
  const { isAuthenticated } = useMoralis();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xffffff,
          backgroundColor: 0x0,
          points: 10.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // maxDistance: 30.0,
          spacing: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect);
    };
  }, [vantaEffect]);
  // if (!isAuthenticated) return <Login />;
  return (
    <div ref={vantaRef} className="h-screen overflow-y-scroll overflow-hidden">
      <Head>
        <title>Metaverse Chat App</title>
      </Head>
      {isAuthenticated ? (
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
