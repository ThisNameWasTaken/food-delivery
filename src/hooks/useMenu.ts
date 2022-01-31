import { useEffect, useState } from 'react';
import { FoodListItemProps } from '../components/FoodList/FoodList';
import useRequest from './useRequest';

const _mock = [
  {
    id: '1',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Lorem ipsum dolor',
    price: 22,
  },
  {
    id: '2',
    media:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Voluptatem atque offici',
    price: 22,
  },
  {
    id: '3',
    media:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
    name: 'Adipisci ratione officiis',
    price: 22,
  },
  {
    id: '4',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Autem facilis ipsam',
    price: 22,
  },
  {
    id: '5',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Eveniet in iste',
    price: 22,
  },
  {
    id: '6',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Lorem ipsum dolor',
    price: 22,
  },
  {
    id: '7',
    media:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Voluptatem atque offici',
    price: 22,
  },
  {
    id: '8',
    media:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
    name: 'Adipisci ratione officiis',
    price: 22,
  },
  {
    id: '9',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Autem facilis ipsam',
    price: 22,
  },
  {
    id: '10',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Eveniet in iste',
    price: 22,
  },
];

const useMenu = (restaurantId: string) => {
  const [items, setItems] = useState<FoodListItemProps[]>([]);
  const request = useRequest();

  useEffect(() => {
    request
      .get('/menu', { queryParams: { restaurantId } })
      .then((items: any[]) =>
        setItems(
          items.map((item, index) => ({
            ...item,
            media: index < _mock.length ? _mock[index].media : _mock[0].media,
          }))
        )
      )
      .catch(console.error);
  }, []);

  return { items };
};

export default useMenu;
