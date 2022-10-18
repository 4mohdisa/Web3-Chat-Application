import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  // const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Chat App</title>
      </Head>
      <p>Welcome to the app</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
