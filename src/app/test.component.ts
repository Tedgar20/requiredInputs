import { Component, afterNextRender, input, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <h1>Hello, {{this.name()}}</h1>
  `,
})
export class TestComponent {
  constructor() {
    afterNextRender(() => {
      if(this.name()) {
        this.count.set(1);
      }
    });
  }
  name = input.required<string>();
  count = signal<number>(0);
}
