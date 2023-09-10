import { Routes, Route } from 'react-router-dom';
import LoginUser from './LoginUser/LoginUser';
import CreateUser from './CreateUser/CreateUser';
import RecoverPass from './RecoverPass/RecoverPass';
import ResetPass from './ResetPass/ResetPass';

const Login = () => {
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