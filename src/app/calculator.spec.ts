import { Calculator } from './calculator';

describe('Test for Calculator', () => {

  describe('Tests for multiply', () => {
    it('should return a nine', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(3,3);
      //Assert
      expect(rta).toEqual(9);
    });

    it('should return a four', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(1,4);
      //Assert
      expect(rta).toEqual(4);
    });
  });

  describe('Tests for divide', () => {
    it('should return a some numbers', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      expect(calculator.divide(6,3)).toEqual(2);
      expect(calculator.divide(5,2)).toEqual(2.5);
    });

    it('for a zero', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      expect(calculator.divide(6,0)).toBeNull();
      expect(calculator.divide(5,0)).toBeNull();
      expect(calculator.divide(1212121212,0)).toBeNull();
    });

    it('tests matchers', () => {
      let name = 'nicolas';
      let name2;

      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1 + 3 === 4).toBeTruthy(); // 4
      expect(1 + 1 === 3).toBeFalsy();

      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);

      expect('123456').toMatch(/123/);
      expect(['apples', 'oranges', 'pears']).toContain('oranges');
    });
  })




});
