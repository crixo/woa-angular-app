import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { SharedModule } from '../shared/shared.module';

import { PaginationService } from './services/pagination.service';

import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [SharedModule],
    exports: [
        NavComponent, PageNotFoundComponent],
    declarations: [ NavComponent, PageNotFoundComponent ],
    providers: [
        PaginationService
    ],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
  }