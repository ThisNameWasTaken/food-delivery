import { IonIcon, IonText } from '@ionic/react';
import { star } from 'ionicons/icons';
import React, { useEffect } from 'react';
import styles from './ReviewList.module.scss';

export type Review = {
  id: number;
  comment: string;
  score: number;
  restaurant: any;
};

export type ReviewListProps = {
  items: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({ items }) => {
  return (
    <div className={styles.reviewList}>
      <IonText color="dark">
        <h2 className="h2">Reviews</h2>
      </IonText>
      {items.map((item) => (
        <IonText color="dark" className={styles.reviewListItem} key={item.id}>
          <div className={styles.reviewRating}>
            {(item.score / 2).toFixed(1)} <IonIcon icon={star} />
          </div>
          <div className={styles.reviewComment}>{item.comment}</div>
        </IonText>
      ))}
    </div>
  );
};

export default ReviewList;
