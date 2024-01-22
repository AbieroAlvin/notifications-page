import { useState } from "react";

const Message = ({ id, sender, message, read, onMarkAsRead }) => {
  const [showMessage, setShowMessage] = useState(false);
  return <div>Message</div>;
};

export default Message;
