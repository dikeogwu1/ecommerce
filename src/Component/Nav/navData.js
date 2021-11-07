import {
  FaCreditCard,
  FaBook,
  BiHelpCircle,
  GrInfo,
  MdAddShoppingCart,
  MdContactPhone,
} from 'react-icons/all'
import React from 'react'
const sublinks = [
  {
    page: 'Daily deals',
    text: `Check out our deals of the day, it's awesome`,
    links: [
      { label: 'Discount', icon: <FaCreditCard />, url: '/discount', img: '' },
      { label: 'offers', icon: <MdAddShoppingCart />, url: '/offer', img: '' },
    ],
  },
  {
    page: 'Features',
    text: 'Explor all features,multiple choices ... ',
    links: [
      { label: 'our features', icon: <FaBook />, url: '/features', img: '' },
    ],
  },
  {
    page: 'Help & contact',
    text: 'Contact our customers care for answers,info,know more about us',
    links: [
      { label: 'need help', icon: <BiHelpCircle />, url: '/help', img: '' },
      { label: 'contact', icon: <MdContactPhone />, url: '/contact', img: '' },
      {
        label: 'about us',
        icon: <GrInfo />,
        url: '/about',
        img: '',
      },
    ],
  },
]

export default sublinks
