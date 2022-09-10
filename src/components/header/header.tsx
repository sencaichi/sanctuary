import React from "react";
import Menu from "../menu";
import utilStyles from "../../styles/utils.module.scss";

export default function Header() {
  return (
    <div className="header-wrap">
      <p className={utilStyles.brandDescription}>ur so nonbinary</p>
      <Menu />
    </div>
  )
}
