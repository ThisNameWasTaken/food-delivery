import { IonButton, IonIcon, IonText } from '@ionic/react';
import { star } from 'ionicons/icons';
import classNames from 'classnames';
import './RestaurantList.css';

type RestaurantListTitleProps = {
  title: string;
  icon: React.ReactElement;
};

const RestaurantListTitle: React.FC<RestaurantListTitleProps> = ({
  title,
  icon,
}) => {
  return (
    <IonText color="dark" className="section">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <h2 className="h4 ion-margin-vertical" style={{ marginLeft: 4 }}>
          {title}
        </h2>
        <IonButton
          color="primary"
          fill="clear"
          style={{ marginLeft: 'auto', marginRight: -16 }}
        >
          See all
        </IonButton>
      </div>
    </IonText>
  );
};

export type RestaurantListItemProps = {
  id: string;
  name: string;
  media: string;
  rating: string;
  deliveryTime: string;
};

const ListItem: React.FC<RestaurantListItemProps> = ({
  media = '',
  name = '',
  rating = '',
  deliveryTime = '',
}) => {
  return (
    <div className="list-item">
      <div
        className="list-item-media"
        style={{
          backgroundImage: `url(${media})`,
        }}
      >
        <div className="list-item-delivery-time">{deliveryTime}</div>
      </div>
      <div className="list-item-content">
        <div className="list-item-name">{name}</div>
        <div className="list-item-rating">
          {rating}
          <IonIcon icon={star} color="dark" />
        </div>
      </div>
    </div>
  );
};

type RestaurantListProps = {
  items?: RestaurantListItemProps[];
  title?: string;
  icon?: React.ReactElement;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const RestaurantList: React.FC<RestaurantListProps> = ({
  items = [],
  title,
  icon,
  className,
  style,
  ...other
}) => {
  return (
    <>
      {title && icon && <RestaurantListTitle title={title} icon={icon} />}

      <div className={classNames('list', className)} style={style} {...other}>
        <div className="list-content">
          {items.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
