/** ****************************************
 * Project: math-magicians
 * File: Buttons.js
 * Created: 3/29/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import InputFied from './Input';

function Buttons() {
  const [calObj, setCalObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });
  return (
    <>
      <InputFied resObj={calObj} />
      <div className="buttons">
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate(calObj, 'AC'))}
            >
              AC
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '+/-'))}
            >
              +/-
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '%'))}
            >
              %
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '÷'))}
            >
              ÷
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}7`, 10) || 7 })}
            >
              7
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 8 })}
            >
              8
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 9 })}
            >
              9
            </button>
          </div>
          <div className="btn-col">
            <button type="button" className="cal-btn" onClick={() => setCalObj(calculate({ ...calObj }, '*'))}>
              *
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 4 })}
            >
              4
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 5 })}
            >
              5
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 6 })}
            >
              6
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '-'))}
            >
              -
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 1 })}
            >
              1
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 3 })}
            >
              3
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 4 })}
            >
              4
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '+'))}
            >
              +
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj({ ...calObj, next: parseInt(`${calObj.next}`, 10) || 0 })}
            >
              0
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '.'))}
            >
              .
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => setCalObj(calculate({ ...calObj }, '='))}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
