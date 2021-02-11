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
    
  </div>;
};
