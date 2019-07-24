import React from 'react';

export default function Text(props) {
  console.log(props);
  return (
    <span className="text">
      {props.text}
    </span>
  );
}