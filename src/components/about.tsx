import React from "react";
import IPage from "../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../config/transition";

const About: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >

    </motion.div>
  )
}
