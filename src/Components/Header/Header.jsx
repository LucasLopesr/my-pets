import { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/dogs.svg';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {
  const { data } = useContext(UserContext);

console.log(data);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Pets - Home'><Logo/></Link>
        { data ? (
          <Link className={styles.loginButton} to='/account'> { data.username }</Link>
        ) : (
          <Link className={styles.loginButton} to='/login'> Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}

export default Header;
