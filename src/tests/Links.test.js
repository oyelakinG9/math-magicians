import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('pages test snapshots', () => {
  it('testing home page', () => {
    render(<App />);
    const Home = screen.getByText('Home');
    fireEvent.click(Home);
    expect(screen.getByText('Welcome to our page!')).toMatchSnapshot();
  });
  it('testing Quote page', () => {
    render(<App />);
    const Quote = screen.getByText('Quote');
    fireEvent.click(Quote);
    expect(screen.getByText('Mathematics is not about number,equation,scompulation or algorithm:It is about understanading')).toMatchSnapshot();
  });
  it('testing Calculator page', () => {
    render(<App />);
    const Calculator = screen.getByText('Calculator');
    fireEvent.click(Calculator);
    expect(screen.getByText('0')).toMatchSnapshot();
  });
});
