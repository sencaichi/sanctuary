import React, { useContext } from "react";
import { MenuContext } from "../menuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";
import routes from "../../../config/routes";
import Link from "next/link";

const internalLinks = [
  {

    url: "/about",
    name: "About",
  },
]

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>
                  <i>{link.name}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
