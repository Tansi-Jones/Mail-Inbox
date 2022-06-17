import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import { selectMails } from "../features/mailSlice";
import { useSelector } from "react-redux";

export const Inbox = () => {
  const allMails = useSelector(selectMails);

  console.log(allMails);
  return (
    <div className="space-y-2 mx-5 overflow-y-auto">
      {allMails.map((message, index) => (
        <Link
          key={index}
          to={`/message/${message._id}`}
          state={{
            timeStamp: message.timeStamp,
            subject: message.subject,
            content: message.content,
            id: message._id,
            isRead: message.isRead,
          }}
        >
          <Cards {...message} />
        </Link>
      ))}
    </div>
  );
};
