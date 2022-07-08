import { GetStaticProps } from "next";

import Head from "next/head";

import styles from '../styles/styles.module.scss';

import firebase from "../services/firebaseConnections";
import { useState } from "react";


interface Data {
  id: string;
  donate: boolean;
  lastDonate: Date;
  image: string;
}


interface HomeProps {
  data: string;
}


export default function Home({data}: HomeProps) {
  
  const [donaters, setDonaters] = useState(JSON.parse(data));

  return (
    <>
      <Head>
        <title>Board | Tarefas</title>
      </Head>

      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donaters}>
          <img src="https://avatars.githubusercontent.com/u/99266969?v=4" alt="Usuario 1" />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const donaters = await firebase.firestore().collection('users').get();

  const data = JSON.stringify(donaters.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }));

  return{
    props: {
      data
    },  
    revalidate: 60 * 60 * 24 // 1 day
  }
}