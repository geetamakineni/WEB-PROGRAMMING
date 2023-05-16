import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background:orange; color: Black;font-family: "Arial Black"}',
    'li a { color:black}',
    'ul.nav a:hover { color: WHITE  }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
