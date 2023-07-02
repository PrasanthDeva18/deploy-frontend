import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {
  FaTh,
  FaBars,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { FaPeopleCarry } from "react-icons/fa";

import { BiBookContent, BiLogInCircle } from "react-icons/bi";
export const SidebarData = [
  {
    title: 'Login',
    path: '/admin/login',
    icon: <FaTh/>
  },
  {
    title: 'Workers',  //reports
    path: '/admin/wo',
    icon: <SlPeople />,
    
  },
  {
    title: 'Coordinator', //products
    path: '/admin/co',
    icon: <FaPeopleCarry />
  },
 
  {
    title: 'Stock', //messages
    path: '/admin/di/co',
    icon: <AiOutlineStock/>,
  },
  {
    title: 'Logout',  //support
    path: '/Support',
    icon: <BiLogInCircle/>
  }
];