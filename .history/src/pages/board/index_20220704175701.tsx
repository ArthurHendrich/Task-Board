import Head from 'next/head';
import styles from './styles.module.scss';
import { FiPlus } from 'react-icons/fi'

export default function Board(){
  return (
    <>
      <Head>
        <title>My Task | Tarefas</title>
      </Head>

      <main className={styles.container}>
        <form>
          <input type="text" placeholder='Digite sua tarefa' />
          <button type='submit'><FiPlus size={25} color="#17181f"/></button>
        </form>

      </main>
    </>
  )
}