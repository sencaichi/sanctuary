// import Head from 'next/head';
// import Link from 'next/link';
// import Date from '../components/date';
// import Layout, { siteTitle } from '../components/layout';
// import { getSortedPostsData } from '../../lib/posts';
// import { GetStaticProps } from 'next';
// import MenuManager from '../components/menu/menuManager';
// import Header from '../components/header/header';

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({
//   allPostsData
// }: {
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
//   return (
//     <div>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <MenuManager>
//         <Header />
//       </MenuManager>

//       {/* <section className={utilStyles.headingMd}>
//         <p>what it gave?</p>
//         <p>
//           (This is a sample website - you'll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section> */}
//       </div>
//   );
// }

import React, { useState, useEffect } from "react";
// import { pageData } from "../data";
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
      {/* <Navbar name={"Navbar"}/> */}
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

