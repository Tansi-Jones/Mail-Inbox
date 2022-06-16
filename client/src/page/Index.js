import { useNavigate } from "react-router-dom";

export const Index = ({ userName, noMessages, noUnReadMessages }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-slate-500 rounded-lg px-3 py-5 text-center max-w-sm mx-auto space-y-3 my-32">
      <h1 className="text-2xl font-medium text-slate-500">Hello {userName}</h1>
      <p>
        You have {noUnReadMessages} unread messages out of {noMessages} total
      </p>
      <button className="bg-primary rounded-lg text-white px-4 py-2 hover:bg-opacity-90 transition duration-200 ease-in" onClick={()=>navigate("/inbox")}>
        View messages
      </button>
    </div>
  );
};
