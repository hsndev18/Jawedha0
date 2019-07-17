import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';

import {IonicRatingModule, RatingComponent} from 'ionic4-rating/dist';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage],
  providers: [
    HttpClientModule
  ]
})
export class DetailsPageModule {}
