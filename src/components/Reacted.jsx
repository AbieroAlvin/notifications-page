const Reacted = ({ id, read, onMarkAsRead, post, time, profile, name }) => {
  const bgClass = read ? "bg-Verylightgrayishblue" : "bg-Lightgrayishblue2";
  return (
    <div
      className={`flex w-full gap-4 items-center font-body p-2 ${bgClass} cursor-pointer rounded-md`}
      onClick={() => onMarkAsRead(id)}
    >
      <div className="w-[40px] h-[40px]">
        <img src={profile} alt={name} />
      </div>
      <div>
        <div className="flex items-center md:text-[15px] text-[14px] flex-wrap">
          <div className="flex items-center">
            <p className="font-semibold text-Verydarkblue  hover:text-Blue cursor-pointer">
              {name}
            </p>
            <div className="ml-2 flex items-center">
              <span className="font-normal ml-2">
                reacted to your recent post
              </span>
              <span className="cursor-pointer font-semibold text-Blue">
                {post}
              </span>
              {!read && (
                <div className="bg-red-300 ml-1 w-[5px] h-[5px] rounded-full block"></div>
              )}
            </div>
          </div>
        </div>
        <div className="text-[13px]">{time}</div>
      </div>
    </div>
  );
};

export default Reacted;
