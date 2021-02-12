import React from "react";
import "./Navbar.scss";
import { GiBottledShadow } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

export interface NavbarProps {
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <GiBottledShadow size="2rem" color="#fff" />
      </div>
      <nav>
        <NavLink to="/">
          <BiSearchAlt size="2rem" />
        </NavLink>
        <NavLink to="/">
          <AiOutlineMessage size="2rem" />
        </NavLink>
      </nav>
      <div className="navbar__account">
        <AiOutlineBell size="2rem" />
        <img src="https://avatars.githubusercontent.com/u/62460030?s=460&u=1bea4d850a2fd895c6954f10196dfb0ab4cbbb3e&v=4" alt="avatar"/>
      </div>
    </div>
  );
};

export default Navbar