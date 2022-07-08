import Head from "next/head";
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board | Tarefas</title>
      </Head>

      <main className={StyleSheet.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={StyleSheet.callToAction}>
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
