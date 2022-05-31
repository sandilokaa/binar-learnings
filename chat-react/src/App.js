import { useEffect, useState } from "react";
import io from "socket.io-client";
import logo from './logo.svg';
import './App.css';

const socket = io.connect("process.env.REACT_APP_BACKEND_URL");

function App() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function handleTextChange(e) {
    setMessage(e.target.value);
    console.log(message);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!message || message === "") return;
    console.log("Submitted!");

    socket.emit("chat message", message);
  }

  useEffect(() => {
    socket.on("incoming message", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-message">
          {message.map((message, index) => (
            <div className="App-message" key={index}>
              {message}
            </div>
          ))}
        </div>
        <form className="App-control" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Message..."
              onChange={handleTextChange}
            />
            <input className="App-button" type="submit" value="Send"/>
        </form>
    </div>
  );
}

export default App;
