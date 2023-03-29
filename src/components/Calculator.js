/** ****************************************
 * Project: math-magicians
 * File: Calculator.js
 * Created: 3/28/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div className="calculator">
      <div className="dispaly">
        <input className="input" placeholder="0" />
      </div>
      <div className="buttons">
        <div className="btn-row">
          <div className="btn-col"><Buttons label="AC" /></div>
          <div className="btn-col"><Buttons label="+/-" /></div>
          <div className="btn-col"><Buttons label="%" /></div>
          <div className="btn-col"><Buttons label="/" /></div>
        </div>
        <div className="btn-row">
          <div className="btn-col"><Buttons label="7" /></div>
          <div className="btn-col"><Buttons label="8" /></div>
          <div className="btn-col"><Buttons label="9" /></div>
          <div className="btn-col"><Buttons label="*" /></div>
        </div>
        <div className="btn-row">
          <div className="btn-col"><Buttons label="4" /></div>
          <div className="btn-col"><Buttons label="5" /></div>
          <div className="btn-col"><Buttons label="6" /></div>
          <div className="btn-col"><Buttons label="-" /></div>
        </div>
        <div className="btn-row">
          <div className="btn-col"><Buttons label="1" /></div>
          <div className="btn-col"><Buttons label="2" /></div>
          <div className="btn-col"><Buttons label="3" /></div>
          <div className="btn-col"><Buttons label="+" /></div>
        </div>
        <div className="btn-row">
          <div className="btn-col"><Buttons label="0" /></div>
          <div className="btn-col"><Buttons label="." /></div>
          <div className="btn-col"><Buttons label="=" /></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
