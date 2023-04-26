import { Calculator } from './calculator';
describe('Test for Calculator', () => {
  it('should multiply 2 and 3', () => {
    const calculator = new Calculator();
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });
  it('should divide 6 and 3', () => {
    const calculator = new Calculator();
    const result = calculator.divide(6, 3);
    expect(result).toBe(2);
  });
  it('should divide by zero', () => {
    const calculator = new Calculator();
    expect(() => {
      calculator.divide(6, 0);
    }).toThrowError('Cannot divide by zero');
  });
});
