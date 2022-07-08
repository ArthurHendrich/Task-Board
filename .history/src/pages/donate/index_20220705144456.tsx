import Head from 'next/head';
import styles from './styles.module.scss';

export default function Donate() {
  return(
    <>
    <Head>
      <title>Support | Tarefas </title>
    </Head>

    <main className={styles.container} >
      <img src="/images/rocket.svg" alt="apoiador" />

      <div className={styles.vip}>
        <img src="https://avatars.githubusercontent.com/u/99266969?v=4" alt="Donator" />
        <span>Parabéns você é um novo apoiador!</span>
      </div>

      <h1>Seja um apoiador deste projeto 🏆</h1>
      <h3>Contribua com apenas <span>R$ 1.00</span></h3>
      <strong>Apareça na nossa home, tenha funcionalidades exclusivas.</strong>
    </main>
    </>
  )
}