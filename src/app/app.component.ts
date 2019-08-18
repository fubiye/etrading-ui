import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etrading-ui';
  navLinks = [{
    path: '/',
    label:'Stock'
  },{
    path: '/bond',
    label: 'Bond'
  }];
}
