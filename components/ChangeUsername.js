import React from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button onClick={setUsername}>Change Username</button>
    </div>
  );
};

export default ChangeUsername;
