import '../styles/global.css';
import React, { useState, useEffect } from "react";
import { AppProps } from 'next/app';
import Loading from "../components/loading/loading"

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 1500);
    };
    delay();
    return () => console.log("Unmounting...");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Component {...pageProps} />;
}
