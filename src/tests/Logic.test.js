import operate from "../logic/operate";
import calculate from "../logic/calculate";

describe("Use Calculate function to check usage of buttons", () => {
  it("Delete all values in object", () => {
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

  it("Call to operate function and store answer on object total", () => {
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

  it("Return an empty array", () => {
    const obj = {
      total: "1",
      next: "0",
      operation: "-",
    };

    const empty = {};
    const buttonName = "0";
    expect(calculate(obj, buttonName)).toEqual(empty);
  });

  it("adds . to obj next", () => {
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
});

describe('Use Operate function for check math logic', () => {
  it('Expect 2 + 3 to be equal 5', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  })

  it('Expect 6 x 9 to be equal 54', () => {
    expect(operate(6, 9, 'x')).toEqual('54');
  })

  // it('Expect to throw an error', () => {
  //   expect(operate(6, 9, ')')).toThrowError;
  // })
});
