import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineInbox, HiOutlineHome } from "react-icons/hi";
import { CgShapeCircle } from "react-icons/cg";
import { RiEdit2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { useSendMailMutation } from "../services/mailApi";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const [send] = useSendMailMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await send({ content, subject }).unwrap();
      toast(data.response);
      window.location.reload();
      console.log(data);
    } catch (error) {
      toast(error.response);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    return setIsOpen(true);
  };

  return (
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
            <a href="/">
              <div className="flex items-center px-4 py-2 text-secondary hover:text-black cursor-pointer  transition-colors duration-200 transform rounded-md ">
                <HiOutlineHome />
                <span className="mx-4 font-medium">Home</span>
              </div>
            </a>

            <a href="/inbox">
              <div className="flex items-center px-4 py-2 text-secondary hover:text-black cursor-pointer  transition-colors duration-200 transform rounded-md ">
                <HiOutlineInbox />
                <span className="mx-4 font-medium">Inbox</span>
              </div>
            </a>

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
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-black bg-opacity-20">
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
                          onChange={(event) => setSubject(event.target.value)}
                        />
                      </div>
                      <div>
                        <textarea
                          rows="3"
                          cols="40"
                          placeholder="New Message"
                          className="resize-none w-full p-2  outline-none text-slate-500"
                          onChange={(event) => setContent(event.target.value)}
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
    </section>
  );
};
