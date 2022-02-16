import operate from "../logic/operate";
import calculate from "../logic/calculate";

test("Delete all values in object", () => {
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

test("Call to operate function and store answer on object total", () => {
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

test("Return an empty array", () => {
  const obj = {
    total: "1",
    next: "0",
    operation: "-",
  };

  const empty = {};
  const buttonName = "0";
  expect(calculate(obj, buttonName)).toEqual(empty);
});

test("adds . to obj next", () => {
  const obj = {
    total: "6",
    next: "6",
    operation: "+",
  };

  const dot = {
    total: "6",
    next: "6.",
    operation: "+",
  };
  const buttonName = ".";
  expect(calculate(obj, buttonName)).toEqual(dot);
});
