import { Component, input } from '@angular/core';
import { TestComponent } from './test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  template: `
    <app-test [name]="name"></app-test>
  `,
})
export class AppComponent {
  name = 'edgar';
}
