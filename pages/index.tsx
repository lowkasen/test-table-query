import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@cloudscape-design/components/button";
import AppLayout from "@cloudscape-design/components/app-layout";

const Home: NextPage = () => {
  return (
    <div>
      <AppLayout></AppLayout>
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <Button>Hello!</Button>
    //     <Button>Hello2!</Button>
    //   </main>
    // </div>
  );
};

export default Home;
