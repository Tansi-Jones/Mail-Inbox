import { useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useOpenMailMutation } from "../services/mailApi";

export const Message = () => {
  const location = useLocation();

  const { timeStamp, subject, content, id, isRead } = location.state;

  const date = new Date(timeStamp);

  useEffect(() => {
    onOpenMail(id);
  }, []);

  const [sendData] = useOpenMailMutation();

  const onOpenMail = async (id) => {
    if (!isRead) {
      try {
        await sendData(id).unwrap();
      } catch (error) {}
    }
  };

  return (
    <div className="relative bg-white ml-5 m-5 px-5 pt-3 pb-8 space-y-3">
      <a href="/inbox">
        {" "}
        <IoReturnUpBack className="text-3xl text-secondary cursor-pointer" />
      </a>

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

        <p className="text-sm text-secondary ">
          {date.toLocaleDateString("en-GB")}
        </p>
      </div>

      <div className="pl-16 text-slate-500">{content}</div>
    </div>
  );
};
