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
import { location, notifications, time, trophy } from 'ionicons/icons';
import HorizontalList from '../components/RestaurantList';
import { RestaurantListItemProps } from '../components/RestaurantList/RestaurantList';
import useQuickRestaurants from '../hooks/useQuickRestaurants';
import useTopRestaurants from '../hooks/useTopRestaurants';
import './Tab1.css';

const Tab1: React.FC = () => {
  const quickRestaurants: RestaurantListItemProps[] = useQuickRestaurants();
  const topRestaurants: RestaurantListItemProps[] = useTopRestaurants();

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

      <IonContent fullscreen className="ion-padding ion-margin-vertical">
        <IonText color="dark">
          <h1 className="h1 ion-margin-bottom">
            Discover the best local food without leaving your home
          </h1>
        </IonText>

        <IonSearchbar
          id="home-search"
          className="search-bar ion-no-padding ion-margin-vertical"
        />

        <HorizontalList
          title="Less than 30 minutes away"
          items={quickRestaurants}
          icon={<IonIcon icon={time} color="primary" slot="start" />}
        />

        <HorizontalList
          title="Top rated restaurants"
          items={topRestaurants}
          icon={<IonIcon icon={trophy} color="warning" slot="start" />}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
