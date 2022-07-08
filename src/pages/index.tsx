import { GetStaticProps } from "next";

import Head from "next/head";

import styles from '../styles/styles.module.scss';

import firebase from "../services/firebaseConnections";
import { useState } from "react";

import boardUser from "../../public/images/boarduser.svg";
import Image from "next/image";

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
  
  const [donaters, setDonaters] = useState<Data[]>(JSON.parse(data));

  return (
    <>
      <Head>
        <title>Board | Tarefas</title>
      </Head>

      <main className={styles.contentContainer}>
        <Image src={boardUser} alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>


        {donaters.length !== 0 && <h3>Apoiadores: </h3>}
        <div className={styles.donaters}>
          {donaters.map( item => (
            <Image width={65} height={65} key={item.image} src={item.image} alt="Donater" />
          ))}
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
    revalidate: 60 * 60 // 1 hour
  }
}