const Group = ({
  id,
  read,
  onMarkAsRead,
  name,
  time,
  profile,
  post,
  group,
}) => {
  const bgClass = read ? "bg-Verylightgrayishblue" : "bg-Lightgrayishblue2";
  return (
    <div
      className={`${bgClass} flex gap-4 p-2 items-center font-body cursor-pointer rounded-md`}
      onClick={() => onMarkAsRead(id)}
    >
      <div className="w-[40px] h-[40px]">
        <img src={profile} alt={name} />
      </div>
      <div className="flex flex-col md:text-[15px] text-[14px]">
        <div className>
          <div className="flex items-center">
            <p className="font-semibold hover:text-Blue cursor-pointer text-Verydarkblue ">
              {name}
            </p>
            <div className="ml-2">{post}</div>
            <div className="ml-1.5 flex items-center ">
              <p className="font-semibold  text-Blue">{group}</p>
              {!read && (
                <div className="bg-red-300 ml-2 w-[5px] h-[5px] rounded-full"></div>
              )}
            </div>
          </div>
        </div>
        <div className="text-[13px]">{time}</div>
      </div>
    </div>
  );
};

export default Group;
