import React, { useEffect, useState } from 'react';
import useRequest from './useRequest';
import useTopRestaurants from './useTopRestaurants';

const useSearch = (searchText?: string) => {
  const request = useRequest();
  const [items, setItems] = useState<any[]>([]);
  const [text, setText] = useState(searchText);
  const _restaurants = useTopRestaurants();

  useEffect(() => {
    if (!text) return;

    (async () => {
      const [restaurants, menuItems] = await Promise.all([
        request.get('/restaurants', { queryParams: { searchName: text } }),
        request.get('/restaurants', { queryParams: { searchFood: text } }),
      ]);

      const items: any[] = [];

      restaurants.forEach((restaurant: any) => {
        items.push(_restaurants.find((res) => res.id === restaurant.id));
      });

      menuItems.forEach((restaurant: any) => {
        if (restaurants.find((item: any) => item.id === restaurant.id)) return;

        items.push(_restaurants.find((res) => res.id === restaurant.id));
      });

      setItems(items);
    })();
  }, [text, _restaurants]);

  return { items, search: setText };
};

export default useSearch;
