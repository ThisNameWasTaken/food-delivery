import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import RestaurantList from '../components/RestaurantList';
import { RestaurantListItemProps } from '../components/RestaurantList/RestaurantList';
import useQuickRestaurants from '../hooks/useQuickRestaurants';
import './Tab2.css';

const Tab2: React.FC = () => {
  const quickRestaurants: RestaurantListItemProps[] = useQuickRestaurants();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="search-toolbar">
          <IonSearchbar
            id="tab2-search-bar"
            className="search-bar ion-no-padding ion-margin-vertical"
          />

          <IonButtons slot="end"></IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-margin-vertical">
        <RestaurantList type="vertical" items={quickRestaurants} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
