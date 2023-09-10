import { Routes, Route, Navigate } from 'react-router-dom';
import LoginUser from './LoginUser/LoginUser';
import CreateUser from './CreateUser/CreateUser';
import RecoverPass from './RecoverPass/RecoverPass';
import ResetPass from './ResetPass/ResetPass';
import { UserContext } from '../../Contexts/UserContext';
import { useContext } from 'react';

const Login = () => {
  const { isUserLogged } = useContext(UserContext);

  if (isUserLogged === true) {
    return <Navigate to='/account' />
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginUser/>}/>
        <Route path='create' element={<CreateUser/>}/>
        <Route path='recover' element={<RecoverPass/>}/>
        <Route path='reset-pass' element={<ResetPass/>}/>
      </Routes>
    </div>
  )
}

export default Login