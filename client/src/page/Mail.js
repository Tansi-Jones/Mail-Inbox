import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export const Mail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { timeStamp, subject, content } = location.state;
  return (
    <div className="relative bg-white ml-5 m-5 px-5 pt-3 pb-8 space-y-3">
      <IoReturnUpBack
        className="text-3xl text-secondary cursor-pointer"
        onClick={() => navigate("/inbox")}
      />

      <div className="flex justify-between">
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
            <h1 className="text-xl text-slate-700 font-medium pb-1">
              {subject}
            </h1>
            <p className="text-sm text-secondary"></p>
          </div>
        </div>

        <p className="text-sm text-secondary ">{timeStamp}</p>
      </div>

      <div className="pl-16 text-slate-500">{content}</div>
    </div>
  );
};
