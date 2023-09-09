import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/dogs.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Pets - Home'><Logo/></Link>
        <Link className={styles.loginButton} to='/login'>Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header;
