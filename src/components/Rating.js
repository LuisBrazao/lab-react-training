import React from 'react';
function Rating(props) {
  let ratingNormal = props.children;
  let rating = Math.round(ratingNormal);
  let stars = {
    0: "☆☆☆☆☆",
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★"
  }

  return <h1>{stars[rating]}</h1>

}

export default Rating;
