import React from 'react';
function IdCard(props) {
  if (props.lang === 'de') {
    return <p>Hallo {props.children}</p>
  } else if (props.lang === 'en') {
    return <p>Hello {props.children}</p>
  } else if (props.lang === 'es') {
    return <p>Hola {props.children}</p>
  } else {
    return <p>Bonjour {props.children}</p>
  }
}

export default IdCard;
