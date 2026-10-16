import {useState} from "react";
import getBotResponse from "./reply.jsx"
import ChatMessage from "./message.jsx"

//This handles the input form and displaying an error message.

function MessageForm() {  
    const [input, setInput] = useState("");
    const [messages, setMessage] = useState([]);
    const [error, setError] = useState(false);
    const [botMessage, setBotMessage] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
    
      if (input.trim() === "") {
        setError("Message cannot be empty.");
        return;
      }
      else {
        const newMessage = {
          id: Date.now(),
          sender: "user",
          text: input,
        }
        const botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: getBotResponse(input),
        }

        setMessage([...messages, newMessage, botMessage])
        setInput("");
        setError("");
        console.log("Submitted:", messages);
      }
    }

    return (
      <>
      <section id = "MessageForm">
      <form id = "AiChat" onSubmit={handleSubmit}>
        <input name = "user message box"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Should I have spaghetti or turkey?"
        />
        <button name = "submit" type="submit">Pull the String</button>
      </form>
      </section>
      {error && <p className="error">{error}</p>}
      <section id = "Window">
      {messages.map((message) => (
        <ChatMessage
        key={message.id}
        sender={message.sender}
        text={message.text}
      />
      ))}
      </section>
      </>

    );
}

export default MessageForm;