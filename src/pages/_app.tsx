import React, { useState, useEffect } from "react";
import { AppProps } from 'next/app';
import Loading from "../components/loading/loading"
import Home from ".";

import '../styles/reset.css';
import "../styles/home.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
