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
import { notifications, location } from 'ionicons/icons';
import FoodList from '../../components/FoodList';
import useMenu from '../../hooks/useMenu';
import styles from './Checkout.module.scss';

const Checkout: React.FC = () => {
  const { items } = useMenu('1');

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" disabled style={{ visibility: 'hidden' }}>
              <IonIcon icon={notifications} color="primary" slot="icon-only" />
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
