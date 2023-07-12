import React, { useState } from "react";
import { Dashboard, Folder, Task, CalendarMonth } from "@styled-icons/material";
import SearchBox from "./searchBox";
import ProfileSvg from "./ProfileSvg";
import Logo from "./Logo";
import MenuSVG from "./menuSVG";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center bg-green-100  px-8 py-3 justify-between tracking-widest ">
        {/* Logo and Links in one div */}
        <div className="flex items-center">
          {/* Logo */}
          <Logo />

          {/* Links with Icons */}
          <div className="hidden md:flex  items-center space-x-8 ml-4 lg:ml-16">
            <Link to="/" className="flex items-center space-x-2 ">
              <Dashboard size={18} color="gray" />
              <span>Dashboard</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2">
              <Folder size={18} color="gray" />
              <span>Projects</span>
            </Link>
            <Link to="/calendar" className="flex items-center space-x-2">
              <CalendarMonth size={18} color="gray" />
              <span>Calendar</span>
            </Link>
            <Link to="/Tasks" className="flex items-center space-x-2">
              <Task size={18} color="gray" />
              <span>Tasks</span>
            </Link>

            {/* Add more links with icons here */}
          </div>
        </div>
        {/* search form and profile picture here */}
        <div className="flex items-center ">
          {/* Search Form */}
          <div className="hidden md:block">
            <SearchBox />
          </div>

          {/* Profile Icon */}
          <div className="bg-white rounded-full w-10 h-10 ml-8 relative hidden md:block">
            <ProfileSvg />
          </div>
          {/* responsive design */}
          <MenuSVG openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </nav>

      {/* links while toggling */}
      {openMenu && (
        <div className="px-8 bg-green-100 py-3">
          <div>
            <Link to="/" className="flex items-center space-x-2 space-y-1 ">
              <Dashboard size={18} color="gray" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center space-x-2 space-y-1"
            >
              <Folder size={18} color="gray" />
              <span>Projects</span>
            </Link>
            <Link
              to="/calendar"
              className="flex items-center space-x-2 space-y-1"
            >
              <CalendarMonth size={18} color="gray" />
              <span>Calendar</span>
            </Link>
            <Link to="/Tasks" className="flex items-center space-x-2 space-y-1">
              <Task size={18} color="gray" />
              <span>Tasks</span>
            </Link>
          </div>
          <SearchBox className="mt-4" />
          {/* Add more links with icons here */}
        </div>
        // <div className="px-8 bg-green-100 py-3">
        //   <div>
        //     <a href="/" className="flex items-center space-x-2 space-y-1">
        //       <Dashboard size={18} color="gray" />
        //       <span>Home</span>
        //     </a>
        //     <a href="/" className="flex items-center space-x-2 space-y-1">
        //       <Folder size={18} color="gray" />
        //       <span>Projects</span>
        //     </a>
        //     <a href="/" className="flex items-center space-x-2 space-y-1">
        //       <CalendarMonth size={18} color="gray" />
        //       <span>Calendar</span>
        //     </a>
        //     <a href="/" className="flex items-center space-x-2 space-y-1">
        //       <Task size={18} color="gray" />
        //       <span>Task</span>
        //     </a>
        //   </div>
        //   <SearchBox className="mt-4" />

        //   {/* Add more links with icons here */}
        // </div>
      )}
    </>
  );
};

export default Navbar;
