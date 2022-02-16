import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import operate from "../logic/operate";
import calculate from "../logic/calculate";

test("adds 1 + 2 to equal 3", () => {
  const obj = {
    total: "1",
    next: "2",
    operation: "+",
  };

  const deleted = {
    total: null,
    next: null,
    operation: null,
  };
  const buttonName = "AC";
  expect(calculate(obj, buttonName)).toEqual(deleted);
});

test("adds 1 + 2 to equal 3", () => {
  const obj = {
    total: "1",
    next: "2",
    operation: "+",
  };

  const equal = {
    total: operate(obj.total, obj.next, obj.operation),
    next: null,
    operation: null,
  };
  const buttonName = "=";
  expect(calculate(obj, buttonName)).toEqual(equal);
});

test("adds 1 + 2 to equal 3", () => {
  const obj = {
    total: "1",
    next: "0",
    operation: "-",
  };

  const empty = {};
  const buttonName = "0";
  expect(calculate(obj, buttonName)).toEqual(empty);
});
