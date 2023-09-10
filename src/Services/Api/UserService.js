import API_URL from './UrlApi';

const tokenUri = 'jwt-auth/v1/token';
const getUserUri = 'api/user';

export default class UserService {

  login = async (body) => {
    const { url, options } = post(tokenUri, body);

    const response = await fetch(url, options)

    const json = await response.json();
    console.log(json);
    return json;
  };

  getUser = async() => {
    const { url, options } = get(getUserUri);
    const response = await fetch(url, options)

    const json = await response.json();
    console.log(json);
    return json;
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

const post = (uri, body) => {
  return {
    url: `${API_URL}/${uri}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
