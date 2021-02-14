import React, { FC } from "react";
import "./Navbar.scss";
import { VscFlame } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";

export interface NavbarProps {
  onToggleSidebar?: () => void;
}

const Navbar: FC<NavbarProps> = ({ onToggleSidebar, ...props }) => {
  return (
    <IconContext.Provider
      value={{ size: "1.5rem", color: "rgb(139, 140, 141)" }}
    >
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <VscFlame color="rgb(250, 250, 250)" size="2rem" />
          </Link>
        </div>
        <nav>
          <div className="navbar__navIcons">
            <div className="navbar__navIcons__search" onClick={onToggleSidebar}>
              <BiSearchAlt />
            </div>
            <NavLink to="/chatroom">
              <AiOutlineMessage />
            </NavLink>
          </div>
        </nav>
        <div className="navbar__account">
          <NavLink to="/">
            <AiOutlineBell />
          </NavLink>
          <Link to="/profile">
            <img
              src="https://avatars.githubusercontent.com/u/62460030?s=460&u=1bea4d850a2fd895c6954f10196dfb0ab4cbbb3e&v=4"
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
