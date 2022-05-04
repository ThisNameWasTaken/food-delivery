import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { fastFood, logOutOutline, receipt } from 'ionicons/icons';
import { useHistory } from 'react-router';
import useUser from '../../hooks/useUser';
import styles from './ManageRestaurants.module.scss';

const ManageRestaurants: React.FC = () => {
  const userRole = localStorage.getItem('userRole');
  const isRestaurantManager = userRole === 'RESTAURANT_MANAGER';
  const user = useUser();
  const history = useHistory();

  const signOut = () => {
    user.signOut();
    history.push('/sign-in');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-margin-vertical">
        {/* <RestaurantList type="vertical" items={items} /> */}
      </IonContent>
    </IonPage>
  );
};

export default ManageRestaurants;
