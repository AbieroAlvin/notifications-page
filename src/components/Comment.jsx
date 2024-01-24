const Comment = ({
  id,
  message,
  read,
  onMarkAsRead,
  name,
  time,
  profile,
  commentPic,
}) => {
  const bgClass = read ? "bg-Verylightgrayishblue" : "bg-Lightgrayishblue2";
  return (
    <div
      className={`${bgClass} flex gap-4 p-2 items-center font-body  cursor-pointer rounded-md`}
      onClick={() => onMarkAsRead(id)}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 ">
          <div className="w-[40px] h-[40px]">
            <img src={profile} alt={name} />
          </div>
          <div className="flex flex-col md:text-[15px] text-[14px]">
            <div className="flex">
              <p className="font-semibold text-Verydarkblue  hover:text-Blue cursor-pointer mr-2">
                {name}
              </p>
              <p className="flex items-center">sent you a private message </p>
            </div>
            <div className="text-[13px]">{time}</div>
          </div>
        </div>
        <div className="w-[50px] h-[50px] rounded-md">
          <img src={commentPic} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
