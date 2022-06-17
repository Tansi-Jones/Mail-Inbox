import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import { selectCurrentValue } from "../features/notificationSlice";
import { useSelector } from "react-redux";

export const Navigation = ({ userName }) => {
  const noUnReadMessages = useSelector(selectCurrentValue);

  return (
    <nav className="flex items-center justify-between px-10 bg-white text-secondary text-sm h-16 w-full">
      <div className="bg-slate-100 py-1 px-3 flex items-center rounded-lg w-72">
        <input
          type="search"
          placeholder="Search"
          className="outline-none bg-transparent py-1 flex-grow"
        />
        <HiOutlineSearch className="text-blue-400" />
      </div>

      <div>
        <div className="flex items-center space-x-4">
          <div className="bg-white shadow p-2 rounded-md mr-4 relative">
            {noUnReadMessages >= 1 && (
              <div className="absolute -top-2 -right-4 w-1 h-1 p-3 bg-primary rounded-full text-white text-xs font-medium flex items-center justify-center">
                {noUnReadMessages}
              </div>
            )}
            <HiOutlineBell className="text-secondary text-lg " />
          </div>
          <div className="w-8 h-8 rounded-full ring ring-primary">
            <img
              src="https://api.lorem.space/image/face?hash=3174"
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <p className="text-base text-slate-600 font-medium">{userName}</p>
        </div>
      </div>
    </nav>
  );
};
