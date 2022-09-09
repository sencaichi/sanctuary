import React, { useContext } from "react";
import { MenuContext } from "../menuManager";
import cn from "classnames";

import "./style.scss";

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">

          </ul>
        </div>
      </div>
    </div>
  )
}
