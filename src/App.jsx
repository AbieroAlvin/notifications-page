import { useState } from "react";

import Follow from "./components/Follow";
import Comment from "./components/Comment";
import Group from "./components/Group";
import Message from "./components/Message";
import Reacted from "./components/Reacted";

import Mark from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import CommentPic from "./assets/images/image-chess.webp";

const notificationsData = [
  {
    id: 1,
    type: "reacted",
    name: "Mark Webber",
    profile: Mark,
    post: "My first tournament today!",
    time: "1m",
    read: false,
  },
  {
    id: 2,
    type: "followed",
    name: "Angela Gray",
    profile: Angela,
    time: "5m",
    read: false,
  },
  {
    id: 3,
    type: "joinedGroup",
    name: "Jacob Thompson",
    profile: Jacob,
    time: "1 day",
    group: "Chess Club",
    read: false,
  },
  {
    id: 4,
    type: "message",
    name: "Rizky Hasanuddin",
    profile: Rizky,
    time: "5 days",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: false,
  },
  {
    id: 5,
    type: "comment",
    name: "Kimberly Smith",
    profile: Kimberly,
    time: "1 week",
    commentPic: CommentPic,
    read: true,
  },
  {
    id: 6,
    type: "reacted",
    name: "Nathan Peterson",
    profile: Nathan,
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks",
    read: true,
  },
  {
    id: 7,
    type: "leftGroup",
    name: "Anna Kim",
    profile: Anna,
    time: "1 day",
    group: "Chess Club",
    read: true,
  },
];

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAll = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));

    setNotifications(updatedNotifications);
  };

  const markRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );

    setNotifications(updatedNotifications);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center font-body">
      <div className="">
        <div className="w-full flex items-center justify-between">
          {/* unread counter */}
          <div className="font-body flex items-center">
            <h1>Notifications</h1>
            <div className="bg-Blue text-white rounded-md p-1.5">
              {unreadCount}
            </div>
          </div>
          {/* mark all */}
          <div onClick={() => markAll()}>
            <p className="cursor-pointer text-[14px]">Mark all as read</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {notifications.map((notification) => {
            const bgClass = notification.read ? "bg-gray-200" : "bg-purple-100";
            switch (notification.type) {
              case "reacted":
                return (
                  <Reacted
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    bgClass={bgClass}
                  />
                );
              case "follow":
                return (
                  <Follow
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    bgClass={bgClass}
                  />
                );
              case "joinedGroup":
                return (
                  <Group
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    bgClass={bgClass}
                  />
                );
              case "message":
                return (
                  <Message
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    message={notification.message}
                    bgClass={bgClass}
                  />
                );
              case "comment":
                return (
                  <Comment
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    bgClass={bgClass}
                  />
                );
              case "leftGroup":
                return (
                  <Group
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    read={notification.read}
                    onMarkAsRead={markRead}
                    bgClass={bgClass}
                  />
                );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
