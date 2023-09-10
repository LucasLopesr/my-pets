import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../Api/UserService';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';


function LoginUser() {

  const userService = new UserService();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const userData = await userService.login({username, password});

    localStorage.setItem('user', JSON.stringify(userData));
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={ handleLogin }>
        <Input label='Usuário' type='text' id='username'/>
        <Input label='Senha' type='password' id='password'/>

        <Button type='submit'>Entrar</Button>
      </form>
       
      <Link to='create'> Criar Usuário</Link>
    </section>
  )
}

export default LoginUser