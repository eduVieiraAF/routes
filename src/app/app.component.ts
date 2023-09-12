import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello</h1>
  <app-menu></app-menu>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
