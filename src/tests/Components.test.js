import React from 'react';
import {render, screen, cleanup, fireEvent,} from '@testing-library/react';
import Calculator from '../components/calculator';

it('5 + 4', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByText('9')).toMatchSnapshot();
});

afterEach(cleanup);