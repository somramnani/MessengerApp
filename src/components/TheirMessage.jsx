import { Avatar } from "react-chat-engine";

const TheirMessage = () =>{
  const isFirstMessageByUser= !lastMessage || lastMessage.sender.username !== message.sender.username; 
  return (
    <div className= "message-row">
      {isFirstMessageByUser && (
       <div 
        className="message-avatar"
        style={{backgroundImage:`url(${message/sender?.avatar})`}}
        >
       </div>
       
      )}
      TheirMessage
    </div>
  )
}

export default TheirMessage; 