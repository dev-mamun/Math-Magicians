/** ****************************************
 * Project: math-magicians
 * File: Footer.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('Footer Render Accurately', () => {
  render(
    <>
      <Footer />
    </>,
  );
  const Element = screen.getByText('© 2023 Created by Abdullah Al Mamun');
  expect(Element).toBeInTheDocument();
});
