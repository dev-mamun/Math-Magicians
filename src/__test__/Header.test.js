/** ****************************************
 * Project: math-magicians
 * File: Header.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('Header Render Accurately', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Math Magicians');
  expect(Element).toBeInTheDocument();
});
