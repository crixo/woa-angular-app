import { Component } from '@angular/core';

@Component({
    //templateUrl: './app/home/welcome.component.html'
    template: `
    <h1>WOA</h1>
    `
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}