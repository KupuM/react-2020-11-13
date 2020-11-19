import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const averageRating = () => {
    let sum = 0;

    for (let elem of props.reviews) {
      sum += elem.rating;
    }

    let averagerating = sum / props.reviews.length;
    return averagerating.toFixed(1);
  };

  return (
    <div>
      <Rate rating={averageRating()} />
      <Menu menu={props.menu} />
      <Reviews reviews={props.reviews} />
    </div>
  );
}
