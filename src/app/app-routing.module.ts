import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { PazientiPageComponent } from './pazienti/pages/pazienti-page.component';


export const appRoutes: Routes = [
    // { path: '', redirectTo: 'all', pathMatch: 'full' },
    // {
    //     path: '**',
    //     redirectTo: 'all'
    // }
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'pazienti',
        //component: PazientiPageComponent
        // canActivate: [ AuthGuard ],
        // data: { preload: true },
        loadChildren: 'app/pazienti/pazienti.module#PazientiModule'
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }    
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule {
  }