import btoa from 'btoa';
import useRequest from './useRequest';

// const username = 'admin';
// const password = 'admin';

const useUser = () => {
  const request = useRequest();

  const signIn = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const token = `Basic ${btoa(`${username}:${password}`)}`;
    localStorage.setItem('token', token);

    request.get('/log-in');
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

  return { signIn, signOut };
};

export default useUser;
