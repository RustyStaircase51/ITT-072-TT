
function ChatMessage( {sender, text} ){
    if (sender == "bot") {
    return (
    <div className={`message_${sender}`}>
        <h3>Magic Conch Shell</h3>
        <p>{text}</p>
    </div>
    )}
    if (sender == "user") {
    return (
    <div className={`message_${sender}`}>
        <h3>User</h3>
        <p>{text}</p>
    </div>
    )   
    }
};

export default ChatMessage;