import React from 'react';
function Rating(props) {
  let ratingNormal = props.children;
  let rating = Math.round(ratingNormal);
  if (rating === 0) {
    return <h1>☆☆☆☆☆</h1>;
  } else if (rating === 1) {
    return <h1>★☆☆☆☆</h1>;
  } else if (rating === 2) {
    return <h1>★★☆☆☆</h1>;
  } else if (rating === 3) {
    return <h1>★★★☆☆</h1>;
  } else if (rating === 4) {
    return <h1>★★★★☆</h1>;
  } else {
    return <h1>★★★★★</h1>;
  }
}

export default Rating;
