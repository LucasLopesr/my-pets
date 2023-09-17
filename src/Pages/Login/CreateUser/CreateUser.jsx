import Button from '../../../Components/Forms/Button/Button';
import Input from '../../../Components/Forms/Input/Input';
import useForm from '../../../Hooks/useForm';
import UserService from '../../../Services/Api/UserService';
import { UserContext } from '../../../Contexts/UserContext';
import { useContext } from 'react';

const CreateUser = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const userService = new UserService();

  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.validate() || !password.validate() || !email.validate()) return;

    const response = await userService.createUser({
      username: username.value,
      password: password.value,
      email: email.value
    });

    if (await response.ok) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className='app-anime-left'>
      <h1 className='app-title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' id='username' {...username}/>
        <Input label='E-mail' type='email' id='email' {...email}/>
        <Input label='Senha' type='password' id='password' {...password}/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default CreateUser