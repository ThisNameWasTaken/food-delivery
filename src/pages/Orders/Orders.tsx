import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';
import React, { useEffect } from 'react';
import FoodList from '../../components/FoodList';
import useOrders from '../../hooks/useOrders';
import useRequest from '../../hooks/useRequest';
import useUser from '../../hooks/useUser';
import styles from './Orders.module.scss';

const Orders = () => {
  const orders = useOrders();
  const request = useRequest();
  const userRole = localStorage.getItem('userRole');

  async function setOrderStatus(
    orderId: string,
    orderStatus:
      | 'ACCEPTED'
      | 'PREPARING'
      | 'PICKED'
      | 'ON_THE_WAY'
      | 'DELIVERED'
  ) {
    await request.post('/orders/setStatus', {
      queryParams: {
        orderId,
        orderStatus,
      },
    });
  }

  return (
    <IonPage>
      <IonContent>
        <div className={styles.orders}>
          {orders.activeOrders.map((order) => (
            <div className={styles.order} key={order.id}>
              <div>
                {order.restaurant.name} ({order.restaurant.location.latitude},{' '}
                {order.restaurant.location.longitude})
              </div>
              <FoodList items={order.foodList} simplified />
              <div>Total {order.total} RON</div>
              <div>
                {order.user.firstName} {order.user.lastName} (
                {order.user.orderLocation.latitude},{' '}
                {order.user.orderLocation.longitude})
              </div>

              {order.orderStatus === 'PICKED' && userRole === 'DELIVERY_USER' && (
                <IonButton
                  onClick={() => setOrderStatus(order.id, 'ON_THE_WAY')}
                  expand="block"
                >
                  Pick Up
                </IonButton>
              )}

              {order.orderStatus === 'ON_THE_WAY' &&
                userRole === 'DELIVERY_USER' && (
                  <IonButton
                    onClick={() => setOrderStatus(order.id, 'DELIVERED')}
                    expand="block"
                  >
                    Deliver
                  </IonButton>
                )}
            </div>
          ))}

          {/* <IonText color="dark">
            <h2 className="h2">
              {user?.role === 'DELIVERY_USER' ? 'Available' : 'Active'} Orders
            </h2>
          </IonText> */}

          {/* {orders.unassignedOrders.length === 0 && (
            <IonText color="dark">
              <p>
                No {user?.role === 'DELIVERY_USER' ? 'available' : 'active'}{' '}
                orders yet
              </p>
            </IonText>
          )} */}

          {orders.unassignedOrders.map((order) => {
            return (
              <div className={styles.order} key={order.id}>
                <div>
                  {order.restaurant.name} ({order.restaurant.location.latitude},{' '}
                  {order.restaurant.location.longitude})
                </div>
                <FoodList items={order.foodList} simplified />
                <div>Total {order.total} RON</div>
                <div>
                  {order.user.firstName} {order.user.lastName} (
                  {order.user.orderLocation.latitude},{' '}
                  {order.user.orderLocation.longitude})
                </div>

                {order.orderStatus === 'RECEIVED' &&
                  userRole === 'RESTAURANT_MANAGER' && (
                    <IonButton
                      onClick={() => setOrderStatus(order.id, 'ACCEPTED')}
                      expand="block"
                    >
                      Accept
                    </IonButton>
                  )}

                {order.orderStatus === 'ACCEPTED' &&
                  userRole === 'RESTAURANT_MANAGER' && (
                    <IonButton
                      onClick={() => setOrderStatus(order.id, 'PREPARING')}
                      expand="block"
                    >
                      Start cooking
                    </IonButton>
                  )}

                {order.orderStatus === 'PREPARING' &&
                  userRole === 'RESTAURANT_MANAGER' && (
                    <IonButton
                      onClick={() => setOrderStatus(order.id, 'PICKED')}
                      expand="block"
                    >
                      Send to delivery
                    </IonButton>
                  )}

                {order.orderStatus === 'PICKED' &&
                  userRole === 'DELIVERY_USER' && (
                    <IonButton
                      onClick={() => setOrderStatus(order.id, 'ON_THE_WAY')}
                      expand="block"
                    >
                      Pick Up
                    </IonButton>
                  )}

                {order.orderStatus === 'ON_THE_WAY' &&
                  userRole === 'DELIVERY_USER' && (
                    <IonButton
                      onClick={() => setOrderStatus(order.id, 'DELIVERED')}
                      expand="block"
                    >
                      Deliver
                    </IonButton>
                  )}
              </div>
            );
          })}

          <IonText color="dark">
            <h2 className="h2">Delivered Orders</h2>
          </IonText>

          {orders.deliveredOrders.length === 0 && (
            <IonText color="dark">
              <p>No delivered orders yet</p>
            </IonText>
          )}

          {orders.deliveredOrders.map((order) => (
            <div className={styles.order} key={order.id}>
              <div>
                {order.restaurant.name} ({order.restaurant.location.latitude},{' '}
                {order.restaurant.location.longitude})
              </div>
              <FoodList items={order.foodList} simplified />
              <div>Total {order.total} RON</div>
              <div>
                {order.user.firstName} {order.user.lastName} (
                {order.user.orderLocation.latitude},{' '}
                {order.user.orderLocation.longitude})
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Orders;
