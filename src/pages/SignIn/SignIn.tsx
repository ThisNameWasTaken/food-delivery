import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from '@ionic/react';
import classNames from 'classnames';
import { eye, eyeOff } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useUser from '../../hooks/useUser';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useUser();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  function signIn() {
    user.signIn({
      // @ts-ignore
      username: usernameRef.current.value,
      // @ts-ignore
      password: usernameRef.current.value,
    });

    history.push('/tab1');
  }

  return (
    <IonPage>
      <IonContent>
        <div className={styles.container}>
          <div>
            <IonText color="dark">
              <h1 className="h1 ion-margin-bottom">Sign in</h1>
            </IonText>

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" ref={usernameRef} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type={!showPassword ? 'password' : 'text'}
                ref={passwordRef}
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
              onClick={signIn}
              className={styles.signInButton}
              expand="block"
              color="primary"
            >
              Sign In
            </IonButton>

            <p className={classNames(styles.noAccount, 'h5 ion-padding')}>
              <span className={styles.line} />
              Don't have an account?
              <span className={styles.line} />
            </p>

            <IonButton
              className={styles.signUpButton}
              expand="block"
              color="primary"
              fill="outline"
              routerLink="/sign-up"
            >
              Register
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
