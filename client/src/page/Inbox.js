import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

export const Inbox = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("http://localhost:5500/api/message");
      setMessage(data.message);
    } catch (error) {}
  };

  console.log(messages);

  return (
    <div className="space-y-2 mx-5 overflow-y-auto">
      {!messages
        ? "...Loading"
        : messages.map((message, index) => (
            <Link
              key={index}
              to={`/mail/${message._id}`}
              state={{
                timeStamp: message.timeStamp,
                subject: message.subject,
                content: message.content,
              }}
            >
              <Cards {...message} />
            </Link>
          ))}
    </div>
  );
};
