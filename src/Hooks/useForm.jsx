import { userState } from 'react';

const useForm = () => {

  const [value, setValue] = userState('');

  return (
    value,
    setValue
  )
}

export default useForm