import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";

export const Inbox = () => {
  const messages = [];
  return (
    <div className="space-y-2 mx-5">
      {messages.map((message, index) => (
        <Link
          key={index}
          to=""
          state={{
            timeStamp: message.timeStamp,
            subject: message.subject,
            content: message.content,
          }}
        >
          <Cards {...messages} />
        </Link>
      ))}
    </div>
  );
};
