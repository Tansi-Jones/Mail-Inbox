import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./page/Index";
import { Inbox } from "./page/Inbox";
import { Mail } from "./page/Mail";

import { HiOutlineInbox, HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import { CgShapeCircle } from "react-icons/cg";
import { RiEdit2Line } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [userName] = useState("Tansi Jones");
  const [noMessages] = useState(10);
  const [noUnReadMessages] = useState(7);
  return (
    <>
      <div className="body-grid">
        <section>
          <aside className="flex flex-col w-48 h-screen px-4 py-8 bg-white">
            <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center space-x-4 w-40 mx-auto hover:bg-opacity-90 transition duration-200 ease-in">
              <RiEdit2Line />
              <span>Compose</span>
            </button>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <div className="flex items-center px-4 py-2 mt-5 text-secondary hover:text-black cursor-pointer  transition-colors duration-200 transform rounded-md ">
                  <HiOutlineInbox />

                  <span className="mx-4 font-medium">Inbox</span>
                </div>

                <hr className="my-6 border-gray-200" />

                <div>
                  <p className="text-secondary text-sm font-medium px-4 pb-3">
                    FLAGS
                  </p>
                  <div className="flex items-center px-4 py-2 text-secondary transition-colors duration-200 transform rounded-md ">
                    <CgShapeCircle className="text-primary" />
                    <span className="mx-4 font-medium">Read</span>
                  </div>

                  <div className="flex items-center px-4 py-2 text-secondary transition-colors duration-200 transform rounded-md ">
                    <CgShapeCircle className="text-blue-500" />
                    <span className="mx-4 font-medium">Unread</span>
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </section>
        <section className="relative">
          <nav className="flex items-center justify-between px-5 bg-white text-secondary text-sm h-16 w-full">
            <div className="bg-slate-100 py-1 px-3 flex items-center rounded-lg w-72">
              <input
                type="search"
                placeholder="Search"
                className="outline-none bg-transparent py-1 flex-grow"
              />
              <HiOutlineSearch className="text-blue-400" />
            </div>

            <div className="flex items-center space-x-5">
              <div className="relative bg-white rounded-lg p-2 shadow">
                <div className="bg-primary absolute top-0 w-3 h-3 right-0 rounded-full text-[0.70rem] "></div>
                <HiOutlineBell className="text-xl text-secondary" />
              </div>
              <div>
                <div className="flex  items-center space-x-4">
                  <div className="w-8 h-8 rounded-full ring ring-primary">
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      className="w-full h-full object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <p className="text-base text-slate-600 font-medium">
                    {userName}
                  </p>
                </div>
              </div>
            </div>
          </nav>

          <div>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Index
                      userName={userName}
                      noMessages={noMessages}
                      noUnReadMessages={noUnReadMessages}
                    />
                  }
                  exact
                />
                <Route path="/inbox" element={<Inbox />} exact />
                <Route path="/mail/:id" element={<Mail />} exact />
              </Routes>
            </Router>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
