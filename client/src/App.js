import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./page/Index";
import { Inbox } from "./page/Inbox";
import { Mail } from "./page/Mail";

import { HiOutlineInbox, HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import { CgShapeCircle } from "react-icons/cg";
import { RiEdit2Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [userName] = useState("Tansi Jones");
  const [noMessages] = useState(10);
  const [noUnReadMessages] = useState(7);
  let [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    return setIsOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5500/api/message", {
        content,
        subject,
      });
      toast(data.response);
      closeModal();
    } catch (error) {
      toast(error.response);
    }
  };

  return (
    <>
      <Toaster />
      <div className="body-grid relative">
        <section>
          <aside className="flex flex-col w-48 h-screen px-4 py-8 bg-white fixed">
            <button
              className="bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center space-x-4 w-36 mx-auto hover:bg-opacity-90 transition duration-200 ease-in cursor-pointer"
              onClick={openModal}
            >
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
                {noUnReadMessages > 0 && (
                  <div className="bg-primary absolute top-0 w-2 h-2 right-0 rounded-full text-[0.70rem] "></div>
                )}
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

          {/* Compose button */}
          <div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-5 text-left align-middle shadow transition-all">
                        <form onSubmit={handleSubmit}>
                          <div className="border rounded-md">
                            <div>
                              <input
                                type="text"
                                placeholder="Subject"
                                className="p-2 outline-none border-b w-full text-slate-500"
                                onChange={(event) =>
                                  setSubject(event.target.value)
                                }
                              />
                            </div>
                            <div>
                              <textarea
                                rows="3"
                                cols="40"
                                placeholder="New Message"
                                className="resize-none w-full p-2  outline-none text-slate-500"
                                onChange={(event) =>
                                  setContent(event.target.value)
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className="mt-4">
                            <button className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90">
                              Send message
                            </button>
                          </div>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>

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
