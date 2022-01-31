import React from 'react';
import useRequest from './useRequest';

const useReviews = (restaurantId: string) => {
  const [reviews, setReviews] = React.useState<any[]>([]);
  const request = useRequest();

  React.useEffect(() => {
    request
      .get('/reviews', { queryParams: { restaurantId } })
      .then(setReviews)
      .catch(console.error);
  }, []);

  return reviews;
};

export default useReviews;
