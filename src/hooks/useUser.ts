import { useState } from 'react';
import btoa from 'btoa';
import useRequest from './useRequest';

// const username = 'admin';
// const password = 'admin';

const useUser = () => {
  const request = useRequest();
  const [user, setUser] = useState<any>();

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log({ username, password });
    const token = `Basic ${btoa(`${username}:${password}`)}`;
    localStorage.setItem('token', token);

    await request.get('/login');

    const [users, delivery, managers] = await Promise.all([
      request.get('/users/all'),
      request.get('/deliveryUsers/all'),
      request.get('/restaurantManagers/all'),
    ]);

    const user = [...users, ...delivery, ...managers].find(
      (user: any) => user.email === username || user.username === username
    );

    setUser(user);

    localStorage.setItem('userEmail', username);
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userRole', user.role);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
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
      signOut();

      const url =
        role === 'RESTAURANT_MANAGER'
          ? '/registerRestaurantManger'
          : role === 'DELIVERY_USER'
          ? '/registerDeliveryUser'
          : '/registerUser';

      // const url = '/registerUser';

      await request.post(url, {
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

  return { user, signIn, signOut, signUp };
};

export default useUser;
