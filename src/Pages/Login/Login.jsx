import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import LoginUser from './LoginUser/LoginUser';
import CreateUser from './CreateUser/CreateUser';
import RecoverPass from './RecoverPass/RecoverPass';
import ResetPass from './ResetPass/ResetPass';
import { UserContext } from '../../Contexts/UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { isUserLogged } = useContext(UserContext);

  if (isUserLogged === true) {
    return <Navigate to='/account' />
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginUser/>}/>
          <Route path='create' element={<CreateUser/>}/>
          <Route path='recover' element={<RecoverPass/>}/>
          <Route path='reset-pass' element={<ResetPass/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login