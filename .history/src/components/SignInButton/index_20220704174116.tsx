import styles from "./styles.module.scss";
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const session = true;

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <img src="github.com/ArthurHendrich.png" alt="Github" />
      Olá Arthur
      <FaGithub color="#FFB800" />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
    <FaGithub color="#FFB800" />
    Entrar com github
    </button>
  )
}