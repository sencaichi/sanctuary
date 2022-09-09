import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from "./swimming.json";
import utilStyles from "../../styles/utils.module.css";

export default function Loading() {
  return (
    <div
      className={utilStyles.Loader}
      style={{height: '100vH'}
    }>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: '50vH' }}
      >
      </Player>
    </div>
  )
}
