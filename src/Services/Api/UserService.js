import API_URL from './UrlApi';

const tokenUri = 'jwt-auth/v1/token';
const tokenValidateUri = 'jwt-auth/v1/token/validate';
const userUri = 'api/user';

export default class UserService {

  login = async (body) => {
    const { url, options } = post(tokenUri, body);

    return await fetch(url, options);
  };

  getUser = async() => {
    const { url, options } = get(userUri);
    const response = await fetch(url, options)

    const json = await response.json();
    console.log(json);
    return json;
  };

  userValidate = async (token) => {
    const { url, options } = post(tokenValidateUri, {}, { 'Authorization' : `Bearer ${token}` });

    return await fetch(url, options);
  };

  createUser = async (user) => {
    console.log(user);
    const { url, options } = post(userUri, user);

    return await fetch(url, options);
  }
}

const get = (uri) => {
  const token = localStorage.getItem('token');
  return {
    url: `${API_URL}/${uri}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    },
  };
}

const post = (uri, body, headers) => {
  return {
    url: `${API_URL}/${uri}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body),
    },
  };
}
