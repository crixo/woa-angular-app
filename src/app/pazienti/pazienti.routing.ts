import { Routes } from '@angular/router';

import { PazientiPageComponent } from './pages/pazienti-page.component';

export const PazientiRoutes: Routes = [
    { path: 'all', component: PazientiPageComponent },
    // { path: 'details', component: DetailsComponent },
    // { path: 'details/:id', component: DetailsComponent }
];