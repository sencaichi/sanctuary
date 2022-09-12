import { AnimatePresence, motion } from "framer-motion";
import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { springTransition, springVariant } from "../config/transition";
import IPage from "../interface/page";
// import { Header, Nav } from "../../css/styles";
import Link from "next/link";

const Navbar: React.FunctionComponent<IPage> = (props) => {
  const active = {
    color: "#4c47a0"
  };

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={springVariant}
      transition={springTransition}
    >
      <div className="header">
      <AnimatePresence exitBeforeEnter>
        <div className="navigation">
          <h1 className="title">
            <Link href="/">SEN CAI</Link>
          </h1>
          <div className="navigation">
            <div>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            {/* <div>
              <Link href="/projects">
                <h3 className="nav">Projects</h3>
              </Link>
            </div> */}
          </div>
        </div>
      </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
