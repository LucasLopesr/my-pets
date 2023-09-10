import { Link } from 'react-router-dom';
import UserService from '../../../Api/UserService';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';
import useForm from '../../../Hooks/useForm';


const LoginUser = () => {

  const userService = new UserService();

  const username = useForm();
  const password = useForm();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;

    const userData = await userService.login({ username: username.value, password: password.value});
    const json = JSON.stringify(userData);
    localStorage.setItem('user', json);
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