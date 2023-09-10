import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../Services/Api/UserService';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';
import useForm from '../../../Hooks/useForm';


const LoginUser = () => {
  const userService = useMemo(() => new UserService(), []);

  useEffect(() => {
    const ifExistsTokenGetUser = async () => {
      if (localStorage.getItem('token')) {
        const user = await userService.getUser();
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
      }
    }

    ifExistsTokenGetUser();
  }, [userService]);

  const username = useForm();
  const password = useForm();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;

    const userData = await userService.login({ username: username.value, password: password.value});
    localStorage.setItem('token', userData.token);

    console.log('getuser');
    const user = await userService.getUser();
    console.log(user);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={ handleLogin }>
        <Input label='Usuário' type='text' id='username' {...username}/>
        <Input label='Senha' type='password' id='password' {...password}/>

        <Button type='submit'>Entrar</Button>
      </form>
       
      <Link to='create'> Criar Usuário</Link>
    </section>
  )
}

export default LoginUser