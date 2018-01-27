import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { PazientiPageComponent } from './pazienti/pages/pazienti-page.component';


export const AppRoutes: Routes = [
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