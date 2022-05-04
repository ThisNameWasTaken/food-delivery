import React, { useEffect, useState } from 'react';
import useRequest from './useRequest';

const useOrders = () => {
  const [orders, setOrders] = useState<{
    deliveredOrders: any[];
    unassignedOrders: any[];
    activeOrders: any[];
    waitingOrder: any;
  }>({
    deliveredOrders: [],
    unassignedOrders: [],
    activeOrders: [],
    waitingOrder: null,
  });
  const request = useRequest();

  async function fetchOrders() {
    const orders = (await request.get('/orders/all')).map((order: any) => {
      const foodList = [order.foodList[0]];
      foodList[0].quantity = 1;

      let total = foodList[0].price;

      for (let i = 1; i < order.foodList.length; i++) {
        if (order.foodList[i].id !== foodList[foodList.length - 1].id) {
          foodList.push(order.foodList[i]);
          foodList[foodList.length - 1].quantity = 1;
        } else {
          foodList[foodList.length - 1].quantity++;
        }

        total += order.foodList[i].price;
      }

      order.foodList = foodList;
      order.total = total;

      return order;
    });

    const userId = localStorage.getItem('userId');

    const activeOrders: any[] = orders.filter(
      (order: any) => order.deliveryUser?.id === userId
    );

    const waitingOrder: any = orders.reverse().find((order: any) => {
      return order.user?.id == userId && order.orderStatus !== 'DELIVERED';
    });

    const unassignedOrders: any[] = orders.filter(
      (order: any) =>
        order.deliveryUser === null && order.orderStatus !== 'DELIVERED'
    );

    const deliveredOrders: any[] = orders.filter(
      (order: any) =>
        order.orderStatus === 'DELIVERED' &&
        (order.deliveryUser?.id == userId ||
          order.restaurant?.id == userId ||
          order.user?.id == userId)
    );

    setOrders({
      unassignedOrders,
      deliveredOrders,
      activeOrders,
      waitingOrder,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrders();
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return orders;
};

export default useOrders;
