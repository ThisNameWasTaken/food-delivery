import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { notifications, location, arrowBack } from 'ionicons/icons';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import FoodList from '../../components/FoodList';
import useCart from '../../hooks/useCart';
import styles from './Checkout.module.scss';

const Checkout: React.FC = () => {
  const { items, total } = useCart();
  const { goBack } = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log({ position });
    }, console.error);
  }, []);

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" onClick={goBack}>
              <IonIcon icon={arrowBack} color="primary" slot="icon-only" />
            </IonButton>
          </IonButtons>

          <IonTitle>
            <div className="nav-title">
              <IonButton fill="clear">
                <IonIcon icon={location} color="primary" slot="start" />
                <>Str. Orhideelor 28</>
              </IonButton>
            </div>
          </IonTitle>

          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon icon={notifications} color="dark" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <FoodList items={items} />

        <div className={styles.pay}>
          <div>
            <div className={styles.totalLabel}>Total</div>
            <div className={styles.totalValue}>{total} RON</div>
          </div>

          <IonButton
            color="primary"
            className={styles.payButton}
            routerLink="/checkout"
          >
            Place order
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
