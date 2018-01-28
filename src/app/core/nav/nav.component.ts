import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: any[];
  constructor(){
    this.loadMenus();
  }
  private loadMenus(): void {
      this.menuItems = [
        {link: '/', name: 'Woa'},

        {link: '/pazienti/all', name: 'Pazienti'}
      ];
  }
}