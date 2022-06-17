import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./page/Index";
import { Inbox } from "./page/Inbox";
import { Message } from "./page/Message";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [userName] = useState("Tansi Jones");
  const [messages, setMessage] = useState([]);
  let noUnReadMessages = 0;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("http://localhost:5500/api/message");
      setMessage(data.message);
    } catch (error) {}
  };

  const filterUnreadMessages = () => {
    let unReadMessages = [];
    let total = 0;
    messages.forEach((element) => {
      unReadMessages.push(element.isRead);
    });

    for (let count = 0; count < unReadMessages.length; count++) {
      if (unReadMessages[count] === false) total++;
    }
    return (noUnReadMessages = total);
  };
  filterUnreadMessages();

  return (
    <>
      <Toaster />
      <div className="body-grid relative">
        <Sidebar />
        <section className="relative">
          <Navigation userName={userName} noUnReadMessages={noUnReadMessages} />

          <div>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Index
                      userName={userName}
                      noUnReadMessages={noUnReadMessages}
                      messages={messages}
                    />
                  }
                  exact
                />
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
