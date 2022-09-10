import React from "react";
import IPage from "../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../config/transition";
import utilStyles from "../../styles/utils.module.scss";

const About: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <div className={utilStyles.aboutFlex}>
        <h2 className="label">About</h2>
      </div>
    </motion.div>

  )
}
