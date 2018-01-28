import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule} from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [ 
    HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, CommonModule, 
    MaterialModule, FlexLayoutModule ],
  exports: [ 
    HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, CommonModule, 
    MaterialModule, FlexLayoutModule ],
  declarations: []
})
export class SharedModule {}
