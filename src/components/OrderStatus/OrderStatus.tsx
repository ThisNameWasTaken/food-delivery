import { IonText } from '@ionic/react';
import React from 'react';
import useOrders from '../../hooks/useOrders';
import styles from './OrderStatus.module.scss';

const OrderStatus = () => {
  const { waitingOrder } = useOrders();

  return (
    <>
      {waitingOrder && (
        <div className={styles.orderStatus}>
          <IonText color="dark">
            <p>
              Order status:{' '}
              <span className="h4">
                {waitingOrder.orderStatus.split('_').join(' ').toLowerCase()}
              </span>
            </p>
          </IonText>
        </div>
      )}
    </>
  );
};

export default OrderStatus;
