import React from "react";
import { FiHome } from "react-icons/fi";
import {
  RiBookMarkLine,
  RiContactsLine,
  RiHashtag,
  RiListCheck3,
  RiMessage2Line,
  RiMore2Line,
  RiNotification2Line,
} from "react-icons/ri";

export const links = [
  {
    title: "Pages",
    links: [
      {
        name: "home",
        icon: <FiHome />,
      },
      {
        name: "explore",
        icon: <RiHashtag />,
      },
      {
        name: "notifications",
        icon: <RiNotification2Line />,
      },
      {
        name: "messages",
        icon: <RiMessage2Line />,
      },
      {
        name: "bookmarks",
        icon: <RiBookMarkLine />,
      },
      {
        name: "lists",
        icon: <RiContactsLine />,
      },
      {
        name: "profile",
        icon: <RiListCheck3 />,
      },
      {
        name: "more",
        icon: <RiMore2Line />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
