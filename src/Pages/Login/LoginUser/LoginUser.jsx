import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../Api/UserService';


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
        <label htmlFor='username'>Usuário</label>
        <input id='username' type='text' onChange={({target}) => setUsername(target.value)} />
        <label htmlFor='password'>Senha</label>
        <input id='password'type='text' onChange={({target}) => setPassword(target.value)} />
        <button type="submit">Entrar</button>
      </form>
       
      <Link to='create'> Criar Usuário</Link>
    </section>
  )
}

export default LoginUser