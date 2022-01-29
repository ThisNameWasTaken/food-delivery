import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';
import classNames from 'classnames';
import { add, remove } from 'ionicons/icons';
import styles from './FoodList.module.scss';

export type FoodListItemProps = {
  id: string;
  name: string;
  media: string;
  price: number;
  quantity?: number;
};

const FoodListItem: React.FC<FoodListItemProps> = ({
  media = '',
  name = '',
  price = 0,
  quantity = 0,
}) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.topRow}>
        <div
          className={styles.media}
          style={{ backgroundImage: `url(${media})` }}
        />
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price} RON</div>
          {quantity > 0 && (
            <div className={styles.price}>
              &times;{quantity} = {price * quantity} RON
            </div>
          )}
        </div>
        <IonButtons slot="start" className={styles.quantityControls}>
          <IonButton color="primary" fill="outline">
            <IonIcon size="large" icon={remove} />
          </IonButton>
          <div className={styles.quantity}>{quantity}</div>
          <IonButton color="primary" fill="outline">
            <IonIcon size="large" icon={add} />
          </IonButton>
        </IonButtons>
      </div>

      <hr className={styles.hr} />
    </div>
  );
};

type FoodListProps = {
  items?: FoodListItemProps[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const FoodList: React.FC<FoodListProps> = ({
  items = [],
  className,
  style,
  ...other
}) => {
  return (
    <div className={classNames(styles.list, className)} {...other}>
      {items.map((item) => (
        <FoodListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FoodList;
