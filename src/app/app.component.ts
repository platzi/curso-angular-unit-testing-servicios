import { Component } from '@angular/core';

import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing-services';

  ngOnInit() {
    const calculator = new Calculator();
    const rta = calculator.multiply(3,3);
    console.log(rta === 9);
    const rta2 = calculator.divide(3,0);
    console.log(rta2 === null);
  }
}
