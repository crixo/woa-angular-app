import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module'
import { PazientiModule } from './pazienti/pazienti.module';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    PazientiModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(AppRoutes),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
