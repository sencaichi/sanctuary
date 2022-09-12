import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export default function MenuManager(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {props.children}
    </MenuContext.Provider>
  )
}
