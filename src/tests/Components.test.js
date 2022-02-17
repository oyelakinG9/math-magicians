import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Calculator from "../components/calculator";

describe('calculator function testing', () => {
  test('test 5 + 4 to equl 9', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('9')).toMatchSnapshot();
  });

  test('calculator contains all buttons', () => {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    render(
      <Calculator />,
    );

    for (const buton of buttons) {
      expect(screen.getByText(buton)).toMatchSnapshot();
    }
  });

  test('Test managment of buttons', () => {
    render(<Calculator />);
    const button = screen.getByText('7');
    expect(button).toMatchSnapshot();
  });
});

afterEach(cleanup);
