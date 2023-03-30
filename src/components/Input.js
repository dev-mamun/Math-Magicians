/** ****************************************
 * Project: math-magicians
 * File: Input.js
 * Created: 3/29/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import PropTypes from 'prop-types';

export default function InputFied({ display }) {
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    console.log('inputChangedHandler: ', updatedKeyword);
  };

  return (
    <div className="dispaly">
      <input
        className="input"
        placeholder={display}
        value={display}
        onChange={(event) => inputChangedHandler(event)}
      />
    </div>
  );
}

InputFied.propTypes = {
  display: PropTypes.string.isRequired,
};
