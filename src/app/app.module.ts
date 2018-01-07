import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { PazientiModule } from './pazienti/pazienti.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PazientiModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(AppRoutes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
