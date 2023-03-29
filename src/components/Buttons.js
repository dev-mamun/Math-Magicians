/** ****************************************
 * Project: math-magicians
 * File: Buttons.js
 * Created: 3/29/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import PropTypes from 'prop-types';

function Buttons({ label }) {
  return (
    <button
      type="button"
      className="cal-btn"
    >
      {label}
    </button>
  );
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Buttons;
