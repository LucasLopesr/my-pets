import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Contexts/UserContext';
import { ErrorComponent } from '../../../Components/Forms/Error/ErrorComponent';
import styles from './LoginUser.module.css';
import stylesBtn from '../../../Components/Forms/Button/Button.module.css';


const LoginUser = () => {
  const { userLogin, error, loading } = useContext(UserContext);

  const username = useForm();
  const password = useForm();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.validate() || !password.validate()) return;
    console.log(username.value, password.value)
    userLogin(username.value, password.value);
  }

  return (
    <section className='app-anime-left'>
      <h1 className='app-title'>Login</h1>
      <form className={styles.form} action='' onSubmit={ handleLogin }>
        <Input label='Usuário' type='text' id='username' {...username}/>
        <Input label='Senha' type='password' id='password' {...password}/>
        { loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type='submit'>Entrar</Button>
        )}
        <ErrorComponent error={error}/>
      </form>
      <Link className={styles.recover} to='recover'> Perdeu a senha?</Link>
      <div className={styles.create}>
        <h2 className={styles.subtitle}> Cadastre-se </h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to='create'> Criar Usuário</Link>
      </div>

    </section>
  )
}

export default LoginUser