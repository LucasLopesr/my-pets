import { useState } from 'react';

const emptyValidateMessage = 'Preencha um valor.'
const validations = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (type === false) return true;

    if (value.length === 0) {
      setErrorMessage(emptyValidateMessage);
      return false;
    } else if (validations[type] && !validations[type].regex.test(value)) {
      setErrorMessage(validations[type].message);
      return false;
    } else {
      setErrorMessage(null);
      return true;
    }
  };

  const onChange = ({target}) => {
    if (errorMessage)
      validate(target.value);

    setValue(target.value);
  };

  return {
    value,
    errorMessage,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm