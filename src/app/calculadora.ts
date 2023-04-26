export class Calculadora {
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}
