import { useState } from 'react';

const _mock = [
  {
    id: '1',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '15 min',
    name: 'Lorem ipsum dolor',
    rating: '4.7',
  },
  {
    id: '2',
    media:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '25 min',
    name: 'Voluptatem atque offici',
    rating: '4.5',
  },
  {
    id: '3',
    media:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
    deliveryTime: '15 min',
    name: 'Adipisci ratione officiis',
    rating: '4.5',
  },
  {
    id: '4',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '15 min',
    name: 'Autem facilis ipsam',
    rating: '4.5',
  },
  {
    id: '5',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '15 min',
    name: 'Eveniet in iste',
    rating: '4.5',
  },
];

export default function useQuickRestaurants() {
  const [quickRestaurants, setQuickRestaurants] = useState(_mock);

  return quickRestaurants;
}
