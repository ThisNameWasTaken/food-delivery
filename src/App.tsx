import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, cart } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Restaurant from './pages/Restaurant';
import Checkout from './pages/Checkout';
import { CartProvider } from './hooks/useCart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <CartProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2" disabled></IonTabButton>
            <IonTabButton tab="checkout" href="/checkout">
              <IonIcon icon={cart} />
              <IonLabel>cart</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        <IonFab
          style={{
            position: 'fixed',
            zIndex: 0,
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <IonFabButton
            routerLink="/tab2"
            color="primary"
            style={
              {
                // '--box-shadow':
                // '0px 5px 12px rgb(var(--ion-color-primary-shade-rgb, 0.05))',
              }
            }
          >
            <IonIcon icon={search} />
          </IonFabButton>
        </IonFab>

        <Route path="/restaurant/:id" component={Restaurant} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </IonReactRouter>
    </CartProvider>
  </IonApp>
);

export default App;
