import React from "react";
import "./Nav.scss";

export interface NavProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return <div>
    <h1>hello wrld</h1>
    <p>testin git</p>
    <small>settinh</small>
  </div>;
};
