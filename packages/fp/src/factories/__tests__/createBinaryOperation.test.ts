import { USD } from '@dinero.js/currencies';
import { Dinero } from '../..';
import createBinaryOperation from '../createBinaryOperation';

describe('createBinaryOperation', () => {
  it('creates a binary operation function from a binary function', () => {
    const spy = jest.fn((a, b) => a + b);
    const add = createBinaryOperation<number>(spy);

    const d1 = Dinero({ amount: 500, currency: USD });

    add(d1, d1);

    expect(spy).toHaveBeenCalled();
  });
});
