import { useNavigate } from 'react-router-dom';
import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import UserService from '../Services/Api/UserService';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const userService = useMemo(() => new UserService(), []);

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const response = await userService.login({ username, password });

      console.log(`Error: ${response.statusText}`)
      if (!response.ok)
        throw new Error(`Error: ${response.statusText}`);

      const { token } = await response.json();

      localStorage.setItem('token', token);
      await getUser();
      navigate('/account');
    } catch (err) {
      setError(err.message);
      setIsUserLogged(false);
    } finally {
      setLoading(false);
    }
  }

  const getUser = useCallback(async () => {
    const user = await userService.getUser();
    console.log(user);
    setData(user)
    setIsUserLogged(true);
  }, [userService]);

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setIsUserLogged(false);
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await userService.userValidate(token);
          
          if (!response.ok) {
            throw new Error('Token inválido.');
          }

          await getUser();

        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, [ userService, getUser, userLogout ]);

  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      error,
      loading,
      isUserLogged
    }} >
      { children }
    </UserContext.Provider>
  )
}
