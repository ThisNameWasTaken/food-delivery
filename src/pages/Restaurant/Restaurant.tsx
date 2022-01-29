import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  ScrollDetail,
} from '@ionic/react';
import { arrowBack, cart } from 'ionicons/icons';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import FoodList from '../../components/FoodList';
import useMenu from '../../hooks/useMenu';
import styles from './Restaurant.module.scss';

const Restaurant = () => {
  const { id } = useParams<any>();
  const { items } = useMenu(id);
  const navRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLIonButtonElement>(null);

  function onScroll(event: CustomEvent<ScrollDetail>) {
    const isScrolled = event.detail.currentY > 10;
    navRef.current?.classList.toggle(styles.scrolled, isScrolled);
    if (backButtonRef.current) {
      backButtonRef.current.color = isScrolled ? 'dark' : 'light';
    }
  }

  return (
    <IonPage>
      <IonContent onIonScroll={onScroll} scrollEvents={true}>
        <div className={styles.nav} ref={navRef}>
          <IonButtons>
            <IonButton color="light" fill="clear" ref={backButtonRef}>
              <IonIcon icon={arrowBack} slot="icon-only" />
            </IonButton>
          </IonButtons>

          <h1 className="h2">Lorem ipsum restaurant</h1>
        </div>

        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'})`,
          }}
        />

        <IonText color="light" className={styles.title}>
          <p className="h1 ion-margin-bottom">Lorem ipsum restaurant</p>
        </IonText>

        <FoodList items={items} />

        <div style={{ height: 90 }} />

        <div className={styles.checkout}>
          <div>
            <div className={styles.totalLabel}>Total</div>
            <div className={styles.totalValue}>{57.99} RON</div>
          </div>
          <IonButton
            color="primary"
            className={styles.checkoutButton}
            routerLink="/checkout"
          >
            <IonIcon slot="start" icon={cart} />
            Checkout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Restaurant;
