import { useState, useEffect } from "react";
import styles from "../styles/Discussion.module.css";
import NavBar from "@/components/navbar";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch JSON data from the public folder
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch("/Chat.json"); // Fetch data from public folder
        const data = await response.json();
        setMessages(data.groupChat.messages);
      } catch (error) {
        console.error("Failed to fetch chat data:", error);
      }
    };

    fetchChatData();
  }, []);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add the new message to the chat
      setMessages([
        ...messages,
        {
          senderId: "u001",
          senderName: "You",
          message: input,
          timestamp: new Date().toISOString(),
        },
      ]);
      setInput(""); // Clear the input field
    }
  };

  // Get avatar URL based on user ID
  const getUserAvatar = (userId) => {
    const avatars = {
      u001: "data:image/jpeg;base64,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",
        u002: "https://media.licdn.com/dms/image/v2/D5603AQFmbNEtYoKr6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702811499122?e=1733356800&v=beta&t=j6dBUytvwlyFzMqDUoEwJlt2LFN915Poo57kMfOZtcg",
      u003: "https://media.licdn.com/dms/image/v2/D5616AQH0eBgt_tGDig/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1719349880101?e=1733356800&v=beta&t=D655S21W5cmsaGHnU9XHcOQRdoRkzUJVl_vwHZewyUc",
      u004: "https://avatars.githubusercontent.com/u/142598621?v=4",
      u005: "data:image/jpeg;base64,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",
      u006: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxNHLYzj0VrQ8tM36yj9pZDCena_llL4PQg&s",
        u007: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHR_C5Z3i7Vo8dQvZW5MmpRgtyeGNF5LWcJg&s",
    };
    return avatars[userId] || "https://example.com/avatars/default.jpg"; // Fallback avatar
  };

  return (
    <>
      {" "}
      <div style={{ justifyContent: "center", display: "flex" }}>
        <NavBar />
      </div>
      <div className={styles.container}>
        <section className={styles.msger}>
          <header className={styles.msgerHeader}>
            <div className={styles.msgerHeaderTitle}>
              <i className="fas fa-comment-alt"></i> Chat
            </div>
            <div className={styles.msgerHeaderOptions}>
              <span>
                <i className="fas fa-cog"></i>
              </span>
            </div>
            <div className={styles.statusIndicators}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
          </header>

          <main className={styles.msgerChat}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.msg} ${
                  msg.senderId === "u001" ? styles.rightMsg : styles.leftMsg
                }`}
              >
                <div
                  className={styles.msgImg}
                  style={{
                    backgroundImage: `url(${getUserAvatar(msg.senderId)})`,
                  }}
                ></div>
                <div className={styles.msgBubble}>
                  <div className={styles.msgInfo}>
                    <div className={styles.msgInfoName}>{msg.senderName}</div>
                    <div className={styles.msgInfoTime}>
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                  <div className={styles.msgText}>{msg.message}</div>
                </div>
              </div>
            ))}
          </main>

          <form className={styles.msgerInputarea} onSubmit={handleSendMessage}>
            <input
              type="text"
              className={styles.msgerInput}
              placeholder="Enter your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles.msgerSendBtn}>
              Send
            </button>
          </form>
        </section>
      </div>

    </>
  );
};

export default Chat;
