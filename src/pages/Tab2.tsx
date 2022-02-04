import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import useSearch from '../hooks/useSearch';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { items, search } = useSearch();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="search-toolbar">
          <IonSearchbar
            id="tab2-search-bar"
            className="search-bar ion-no-padding ion-margin-vertical"
            onIonChange={(e) => search(e.detail.value)}
          />

          <IonButtons slot="end"></IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonText color="dark" id="search-placeholder" hidden={items.length > 0}>
        <h2 className="h2">Search for restaurants</h2>
      </IonText>

      <IonContent fullscreen className="ion-padding ion-margin-vertical">
        <RestaurantList type="vertical" items={items} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
