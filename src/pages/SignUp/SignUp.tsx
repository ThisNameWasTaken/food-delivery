import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from '@ionic/react';
import classNames from 'classnames';
import { eye, eyeOff } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useUser from '../../hooks/useUser';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useUser();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  const [role, setRole] = useState('USER');

  async function signUp() {
    try {
      await user.signUp({
        // @ts-ignore
        lastName: firstNameRef.current.value,
        // @ts-ignore
        firstName: firstNameRef.current.value,
        // @ts-ignore
        username: usernameRef.current.value,
        // @ts-ignore
        role: role,
        // @ts-ignore
        email: emailRef.current.value,
        // @ts-ignore
        password: passwordRef.current.value,
      });

      await user.signIn({
        // @ts-ignore
        username: usernameRef.current.value,
        // @ts-ignore
        password: usernameRef.current.value,
      });

      history.push('/tab1');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="sign-in" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className={styles.container}>
          <div>
            <IonText color="dark">
              <h1 className="h1 ion-margin-bottom">Register</h1>
            </IonText>

            <div className={styles.row}>
              <IonItem>
                <IonLabel position="floating">First name</IonLabel>
                <IonInput
                  required
                  type="text"
                  autocomplete="given-name"
                  ref={firstNameRef}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Last name</IonLabel>
                <IonInput
                  required
                  type="text"
                  autocomplete="family-name"
                  ref={lastNameRef}
                />
              </IonItem>
            </div>

            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                required
                type="text"
                autocomplete="username"
                ref={usernameRef}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Role</IonLabel>
              <IonSelect
                value={role}
                onIonChange={(e) => setRole(e.detail.value)}
              >
                <IonSelectOption value="USER">Customer</IonSelectOption>
                <IonSelectOption value="DELIVERY_USER">
                  Delivery
                </IonSelectOption>
                <IonSelectOption value="RESTAURANT_MANAGER">
                  Restaurant manager
                </IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                required
                type="email"
                ref={emailRef}
                autocomplete="email"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                required
                type={!showPassword ? 'password' : 'text'}
                ref={passwordRef}
                autocomplete="new-password"
              />
              <IonButtons slot="end">
                <IonButton
                  onClick={() => setShowPassword((password) => !password)}
                >
                  <IonIcon
                    icon={!showPassword ? eye : eyeOff}
                    slot="icon-only"
                  />
                </IonButton>
              </IonButtons>
            </IonItem>

            <IonButton
              onClick={signUp}
              className={styles.signUpButton}
              expand="block"
              color="primary"
            >
              Register
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
