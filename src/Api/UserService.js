import URL from './UrlApi';
export default class UserService {
  login = async ({username, password}) => {
    const response = await fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const json = await response.json();
    console.log(json);
    return json;
  }
}
