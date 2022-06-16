import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cards = ({ timeStamp, subject, content, isRead, id }) => {
  const [contents] = useState(
    "It is a long established fact that a reader will be distracted"
  );

  const navigate = useNavigate();

  const trim = () => {
    let length = 40;
    let trimmedString = contents.substring(0, length);
    if (content >= 40) return trimmedString;
    return trimmedString + " . . .";
  };
  const string = trim();

  return (
    <div
      className={`${
        isRead ? "unReadFlag" : "readFlag"
      } relative bg-white rounded-lg px-3 py-5 my-2 flex justify-between shadow-sm hover:shadow transition duration-200 ease-in-out cursor-pointer`}
      onClick={() => navigate(`/mail/${id}`)}
    >
      <div className="flex items-center space-x-5">
        <div className="w-10 h-10 rounded-full">
          <img
            src="https://api.lorem.space/image/face?hash=3174"
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <h4 className="text-lg text-slate-600 font-medium">Tansi Jones</h4>
          <p className="text-base text-slate-500 font-medium pb-1">
            Lorem ipsum dolor
          </p>
          <p className="text-sm text-secondary">{string}</p>
        </div>
      </div>
      <div></div>
      <p className="text-sm text-secondary ">10:30 Am</p>
    </div>
  );
};
