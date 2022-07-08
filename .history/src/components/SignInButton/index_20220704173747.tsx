import styles from "./styles.module.scss";
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  return (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com github
    </button>
  )
}