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

  const signUp = async ({
    email,
    username,
    password,
    firstName,
    lastName,
    role,
  }: {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }) => {
    try {
      await request.post('/sign-up', {
        body: {
          email,
          username,
          password,
          firstName,
          lastName,
          role,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return { signIn, signOut, signUp };
};

export default useUser;
