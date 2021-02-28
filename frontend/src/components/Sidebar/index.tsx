import React, { FC, useState } from "react";
import Input from "../Input";
import "./Sidebar.scss";
import { AiOutlinePlus } from "react-icons/ai";
import ChatSelector from "../ChatSelector";
import { IconContext } from "react-icons";

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="sidebar">
      <IconContext.Provider
        value={{ color: "rgb(250, 250, 250)", size: "1.25rem" }}
      >
        <Input
          name="search"
          placeholder="Search"
          uiType="search"
          inputValue={searchValue}
          register={null}
        />
        <div className="sidebar__section">
          <div className="sidebar__section__header">
            <p>Favourites</p>
            <AiOutlinePlus />
          </div>
          <ChatSelector favorite />
        </div>
        <div className="sidebar__section">
          <div className="sidebar__section__header">
            <p>Direct Messages</p>
            <AiOutlinePlus />
          </div>
          <ChatSelector direct />
          <ChatSelector direct />
          <ChatSelector direct />
          <ChatSelector direct />
        </div>
        <div className="sidebar__section">
          <div className="sidebar__section__header">
            <p>Groups</p>
            <AiOutlinePlus />
          </div>
          <ChatSelector />
          <ChatSelector />
          <ChatSelector />
          <ChatSelector />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
