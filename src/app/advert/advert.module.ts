import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdvertEditComponent } from './advert-edit.component';
import { AdvertListComponent } from './advert-list.component';
import { AdvertDetailComponent } from './advert-detail.component';
import { AdvertEditGuard } from '../guards/advert-edit.guard';
import { AdvertListGuard } from '../guards/advert-list.guard';




@NgModule({
  declarations: [
    AdvertEditComponent,
    AdvertListComponent,
    AdvertDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'advert/:id/edit', canActivate: [AdvertEditGuard], component: AdvertEditComponent },
      { path: 'advert-list/:id', canActivate: [AdvertListGuard], component: AdvertListComponent }
    ])  
  ] 
})
export class AdvertModule { }
