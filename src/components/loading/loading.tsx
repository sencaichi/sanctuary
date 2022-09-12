import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from "./swimming.json";
import utilStyles from "../../styles/utils.module.scss";

export default function Loading() {
  return (
    <div
      className="loader"
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
