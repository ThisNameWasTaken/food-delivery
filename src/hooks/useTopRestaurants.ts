import { useEffect, useState } from 'react';
import { FoodListItemProps } from '../components/FoodList/FoodList';
import { RestaurantListItemProps } from '../components/RestaurantList/RestaurantList';
import useRequest from './useRequest';

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

const placeholders = Array(4)
  .fill(0)
  .map((item, index) => ({
    id: `${index}`,
    media: ' ',
    deliveryTime: ' ',
    name: ' ',
    rating: ' ',
  }));

export default function useTopRestaurants() {
  const request = useRequest();
  const [topRestaurants, setTopRestaurants] =
    useState<RestaurantListItemProps[]>(placeholders);

  async function fetchTopRestaurants() {
    try {
      const [restaurants, reviews] = await Promise.all([
        request.get('/restaurants/all'),
        request.get('/reviews/all'),
      ]);

      const ratings = reviews.reduce((acc: any, review: any) => {
        if (!acc[review.restaurant.id]) {
          acc[review.restaurant.id] = 0;
        }
        acc[review.restaurant.id] += review.score / 2;
        return acc;
      }, {});

      setTopRestaurants(
        restaurants.map((item: any, index: number) => ({
          ..._mock[index],
          ...item,
          rating: ratings[item?.id]?.toFixed(1),
        }))
      );
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  return topRestaurants;
}
