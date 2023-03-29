/** ****************************************
 * Project: math-magicians
 * File: Input.js
 * Created: 3/29/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';

export default function InputFied(props) {
  const res = { props };

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    console.log('inputChangedHandler: ', updatedKeyword);
  };

  console.log('InputFied:', res);
  return (
    <div className="dispaly">
      <input
        className="input"
        placeholder={res.props.resObj.next || res.props.total}
        value={`${res.props.resObj.next ? res.props.resObj.total + res.props.resObj.operation + res.props.resObj.next : res.props.resObj.total || 0}`}
        onChange={(event) => inputChangedHandler(event)}
      />
    </div>
  );
}
