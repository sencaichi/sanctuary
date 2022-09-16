import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Header from "../components/header/header";
import Loading from "../components/loading/loading";
import MenuManager from "../components/menu/menuManager";
import Navbar from "../components/navbar";
import Menu from "../components/menu";

const Home = (pageProps: any) => {
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

  const text = ["Bleu", "Blanc", "Studio"];

  return (
      <MenuManager>
      <Menu />
      <Header />
      <div className="main-container"
      id="main-container">
          <h1>
            {text.map(word => (
              <div>{word} <br /></div>
            ))}
          </h1>
        </div>
      </MenuManager>
  );
};

export default Home;

