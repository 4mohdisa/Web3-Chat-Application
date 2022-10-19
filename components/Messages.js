import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15 * 10000;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);

  return (
    <div className="h-[30rem] overflow-y-scroll z-50 bg-black/40 ">
      <div className="space-y-10 p-4 ">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
    </div>
  );
};

export default Messages;
