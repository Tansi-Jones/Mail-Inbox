import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMails } from "../features/mailSlice";
import { selectCurrentValue } from "../features/notificationSlice";

export const Index = () => {
  const noUnReadMessages = useSelector(selectCurrentValue);
  const fetchAllMails = useSelector(selectMails);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="bg-white text-slate-500 rounded-lg px-3 py-5 text-center max-w-sm mx-auto space-y-3 my-32">
      <h1 className="text-2xl font-medium text-slate-500">Hello Tansi Jones</h1>
      <p>
        You have {noUnReadMessages} unread messages out of{" "}
        {fetchAllMails.length} total
      </p>
      <button
        className="bg-primary rounded-lg text-white px-4 py-2 hover:bg-opacity-90 transition duration-200 ease-in"
        onClick={() => navigate("/inbox")}
      >
        View messages
      </button>
    </div>
  );
};
