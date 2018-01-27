import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {NavComponent} from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, RouterModule, MatListModule, FlexLayoutModule, CommonModule],
  exports: [ NavComponent, PageNotFoundComponent, FlexLayoutModule ],
  declarations: [
    NavComponent, PageNotFoundComponent]
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    throwIfAlreadyLoaded(parentModule, 'SharedModule');
  }
}