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
      u006: "https://media.licdn.com/dms/image/v2/D5603AQHQrXrOnjibOQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723627226970?e=1730332800&v=beta&t=3qEj9qYFoHOFasfEaHxagVGT7wFoaNEMmeheeEvyAfo",
      u007: "https://avatars.githubusercontent.com/u/142598621?v=4",
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
