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
    loadChildren: '../pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: '../pages/list/list.module#ListPageModule'
  },
  {
    path: 'restaurants',
    loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule'
  },
  {
    path: 'cafes',
    loadChildren: '../pages/cafes/cafes.module#CafesPageModule'
  },
  {
    path: 'families',
    loadChildren: '../pages/families/families.module#FamiliesPageModule'
  },
  {
    path: 'tracks',
    loadChildren: '../pages/tracks/tracks.module#TracksPageModule'
  },
  {
    path: 'museums',
    loadChildren: '../pages/museums/museums.module#MuseumsPageModule'
  },
  {
    path: 'contact',
    loadChildren: '../pages/contact/contact.module#ContactPageModule'
  },
  {
    path: 'aboutus',
    loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule'
  },
  { path: 'details', loadChildren: '../pages/details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
