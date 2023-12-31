import { useState } from "react";
import io from "socket.io-client"
import Chat from "./Chat";
import "./App.css"

const socket = io.connect("https://chat-app-server-production-3022.up.railway.app");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {

    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  return (
    <div className="App">
      {!showChat ?
        (<div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input type="text" placeholder="Enter Your Name.."
            onChange={(event) => setUsername(event.target.value)} />
          <input type="text" placeholder="Enter Room ID..."
            onChange={(event) => setRoom(event.target.value)} />
          <button onClick={joinRoom}>Join</button>
        </div>)
        :
        (<Chat socket={socket} username={username} room={room}></Chat>
        )}
    </div>
  )
}

export default App
