export const Cards = ({ timeStamp, subject, content, isRead }) => {
  const trimWords = function (content) {
    let words;
    if (content.length > 15) return (words = content.slice(0, 100) + ". . .");
    return content;
  };

  const time = new Date(timeStamp).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  });

  return (
    <div
      className={`${
        isRead ? "unReadFlag" : "readFlag"
      } relative bg-white rounded-lg px-3 py-5 my-2 flex justify-between shadow-sm hover:shadow transition duration-200 ease-in-out cursor-pointer`}
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
          <p className="text-base text-slate-500 font-medium pb-1">{subject}</p>
          <p className="text-sm text-secondary">{trimWords(content)}</p>
        </div>
      </div>
      <p className="text-sm text-secondary ">{time}</p>
    </div>
  );
};
