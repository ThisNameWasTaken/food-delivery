import { useState } from 'react';

const _mock = [
  {
    id: '1',
    media:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',
    deliveryTime: '55 min',
    name: 'Adipisci ratione officiis',
    rating: '4.9',
  },
  {
    id: '2',
    media:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    deliveryTime: '1h',
    name: 'Autem facilis ipsam',
    rating: '4.9',
  },
  {
    id: '3',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '15 min',
    name: 'Eveniet in iste',
    rating: '4.7',
  },
  {
    id: '4',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '15 min',
    name: 'Lorem ipsum dolor',
    rating: '4.7',
  },
  {
    id: '5',
    media:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    deliveryTime: '25 min',
    name: 'Voluptatem atque offici',
    rating: '4.7',
  },
];

export default function useTopRestaurants() {
  const [topRestaurants, setTopRestaurants] = useState(_mock);

  return topRestaurants;
}
