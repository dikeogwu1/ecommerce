import { FaCreditCard, FaBook } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { GrInfo } from "react-icons/gr";
import { MdAddShoppingCart, MdContactPhone } from "react-icons/md";
import React from "react";
const sublinks = [
  {
    page: "Daily deals",
    text: `Checkout all the exciting deals we have for today.`,
    links: [
      { label: "Discount", icon: <FaCreditCard />, url: "/discount", img: "" },
      { label: "offers", icon: <MdAddShoppingCart />, url: "/offer", img: "" },
    ],
  },
  {
    page: "Featured",
    text: "Explore all the featured products.",
    links: [
      {
        label: "Featured products",
        icon: <FaBook />,
        url: "/features",
        img: "",
      },
    ],
  },
  {
    page: "Help & contact",
    text: "Contact our customers care for informations or supports.",
    links: [
      { label: "need help", icon: <BiHelpCircle />, url: "/help", img: "" },
      { label: "contact", icon: <MdContactPhone />, url: "/contact", img: "" },
      {
        label: "about us",
        icon: <GrInfo />,
        url: "/about",
        img: "",
      },
    ],
  },
];

export default sublinks;
