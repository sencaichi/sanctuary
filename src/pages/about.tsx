import React from "react";
import IPage from "../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../config/transition";
import Menu from "../components/menu";
import MenuManager from "../components/menu/menuManager";
import Header from "../components/header/header";

export default function About(props: any) {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <MenuManager>
        <Menu />
      <div className="aboutFlex">
        <h1 className="label">About</h1>
          <div className="desc">
            <h2>
              <span style={{ fontStyle: "italic "}}>Welcome to my portfolio!</span>
            </h2>
            <p>
              My name is Sen Cai and I'm a solution-driven, motivated {" "} <span style={{ fontStyle: "italic" }}>Full Stack Engineer</span>, born and raised in Queens, NY. I'm interested in creating accessible digital spaces that feel like home.
            </p>
            <p>
              I'm a graduate of Fullstack Academy's Grace Hopper program, where I learned to build intiuitive applications using the PERN stack. Before learning to code, I majored in Marketing and worked in telecommunications. I also have tons of customer service experience.
            </p>
            <p>
              When I'm not coding, I'm writing!
            </p>
          </div>
      </div>
      </MenuManager>
    </motion.div>

  )
}
