import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div className="review">
      <hr />
      <h3>{props.review.user}</h3>
      <Rate rating={props.review.rating} />
      <p>{props.review.text}</p>
    </div>
  );
}
