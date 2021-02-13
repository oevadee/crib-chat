import React from "react";
import "./Navbar.scss";
import { GiBottledShadow } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";

export interface NavbarProps {
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  return (
    <IconContext.Provider value={{ size: "1.5rem", color: "#a6a8ff" }}>
      <div className="navbar">
        <div className="navbar__logo">
          <GiBottledShadow color="#fff" size="2rem" />
        </div>
        <nav>
          <NavLink to="/">
            <BiSearchAlt />
          </NavLink>
          <NavLink to="/chatroom">
            <AiOutlineMessage />
          </NavLink>
        </nav>
        <div className="navbar__account">
          <AiOutlineBell />
          <img
            src="https://avatars.githubusercontent.com/u/62460030?s=460&u=1bea4d850a2fd895c6954f10196dfb0ab4cbbb3e&v=4"
            alt="avatar"
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
