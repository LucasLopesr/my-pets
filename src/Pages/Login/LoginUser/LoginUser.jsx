import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Contexts/UserContext';


const LoginUser = () => {
  const { userLogin, error, loading, isUserLogged } = useContext(UserContext);


  const username = useForm();
  const password = useForm();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;
    console.log(username.value, password.value)
    userLogin(username.value, password.value);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={ handleLogin }>
        <Input label='Usuário' type='text' id='username' {...username}/>
        <Input label='Senha' type='password' id='password' {...password}/>
        { loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type='submit'>Entrar</Button>
        )}
        
        {error && <p> { error }</p>}
      </form>
       
      <Link to='create'> Criar Usuário</Link>
    </section>
  )
}

export default LoginUser