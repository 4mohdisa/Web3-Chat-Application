import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState(" ");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");

    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage(" ");
  };
  return (
    <form className="flex fixed bottom-10 bg-black/40 backdrop-blur-sm px-6 py-4 max-w-2xl shadow-xl border-[1px] border-white z-50 rounded-full w-11/12">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter Message ${user.getUsername()}...`}
      />
      <button type="submit" onClick={sendMessage}>
        <img src="/send-icon.svg" alt="" />
      </button>
    </form>
  );
};

export default SendMessage;
