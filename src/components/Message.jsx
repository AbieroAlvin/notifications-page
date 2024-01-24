import { useState } from "react";

const Message = ({ id, message, read, onMarkAsRead, name, time, profile }) => {
  const [showMessage, setShowMessage] = useState(false);
  const bgClass = read ? "bg-Verylightgrayishblue" : "bg-Lightgrayishblue2";

  const handleToggleMessage = () => {
    setShowMessage(!showMessage);
    if (!read) {
      onMarkAsRead(id);
    }
  };
  return (
    <div
      className={`${bgClass} flex gap-4 p-2 items-center font-body  cursor-pointer rounded-md`}
      onClick={() => handleToggleMessage()}
    >
      <div className="flex flex-col">
        <div className="flex gap-4">
          <div className="w-[40px] h-[40px]">
            <img src={profile} alt={name} />
          </div>
          <div className="flex flex-col md:text-[15px] text-[14px]">
            <div className="flex">
              <p className="text-Verydarkblue  font-semibold hover:text-Blue cursor-pointer mr-2">
                {name}
              </p>
              <p>sent you a private message </p>
            </div>
            <div className="text-[13px]">{time}</div>
          </div>
        </div>
        {showMessage && (
          <div className="mt-2 text-sm border p-2 border-gray-400 rounded-md text-[13px] w-3/4 relative right-[-5rem]">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
