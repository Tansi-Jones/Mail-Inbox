import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./page/Index";
import { Inbox } from "./page/Inbox";
import { Message } from "./page/Message";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import { useGetMailsQuery } from "./services/mailApi";
import { selectMails, setMails } from "./features/mailSlice";
import { setNotifications } from "./features/notificationSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [userName] = useState("Tansi Jones");
  const allMails = useSelector(selectMails);

  const { data, isLoading } = useGetMailsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatchMails();
    }
  }, [data, isLoading]);

  useEffect(() => {
    dispatch(setNotifications(allMails));
  });

  const dispatchMails = () => {
    for (let i = 0; i < data.message.length; i++) {
      dispatch(setMails(data.message[i]));
    }
  };

  return (
    <>
      <Toaster />
      <div className="body-grid relative">
        <Sidebar />
        <section className="relative">
          <Navigation userName={userName} />

          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Index userName={userName} />} exact />
                <Route path="/inbox" element={<Inbox />} exact />
                <Route path="/message/:id" element={<Message />} exact />
              </Routes>
            </Router>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
