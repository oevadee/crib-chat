import React, { FC } from "react";
import "./Header.scss";
import { VscPinned } from "react-icons/vsc";
import { AiOutlineInfoCircle, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header__roomInfo">
        <h2>
          <span>#</span>
          PFD room
        </h2>
        <div className="header__roomInfo__members">
          <small>6 members</small>
          <button>+ Add member</button>
        </div>
      </div>
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <div className="header__options">
          <VscPinned />
          <AiOutlineInfoCircle />
          <div className="header__options__line"></div>
          <div className="header__options__favourite">
            <AiOutlineStar />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
