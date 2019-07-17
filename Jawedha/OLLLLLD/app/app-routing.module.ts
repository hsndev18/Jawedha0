import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'restaurants',
    loadChildren: './restaurants/restaurants.module#RestaurantsPageModule'
  },
  {
    path: 'cafes',
    loadChildren: './cafes/cafes.module#CafesPageModule'
  },
  {
    path: 'families',
    loadChildren: './families/families.module#FamiliesPageModule'
  },
  {
    path: 'tracks',
    loadChildren: './tracks/tracks.module#TracksPageModule'
  },
  {
    path: 'museums',
    loadChildren: './museums/museums.module#MuseumsPageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: 'aboutus',
    loadChildren: './aboutus/aboutus.module#AboutusPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
