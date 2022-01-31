import { IonButton, IonIcon, IonText } from '@ionic/react';
import { bicycle, star } from 'ionicons/icons';
import classNames from 'classnames';
import './RestaurantList.css';
import { useHistory } from 'react-router';

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
  id = '1',
  media = '',
  name = '',
  rating = '',
  deliveryTime = '',
}) => {
  const history = useHistory();

  return (
    <div
      className="list-item"
      onClick={() => history.push(`/restaurant/${id}`)}
    >
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
  type?: 'horizontal' | 'vertical';
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

  type = 'vertical',
  ...other
}) => {
  return (
    <>
      {title && icon && <RestaurantListTitle title={title} icon={icon} />}

      <div
        className={classNames('list', `list-${type}`, className)}
        style={style}
        {...other}
      >
        <div
          className="list-content"
          style={{ '--items-count': items.length } as any}
        >
          {items.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
