import React, {useState} from 'react'
import {render, fireEvent} from '@testing-library/react'
import operate from "../logic/operate";
import calculate from "../logic/calculate";

test('adds 1 + 2 to equal 3', () => {
  const obj = {
    total: "1",
    next: "2",
    operation: "+",
  }

  const deleted = {
    total: null,
    next: null,
    operation: null,
  }
  const buttonName = 'AC';
  expect(calculate(obj, buttonName)).toBe(deleted);
});
