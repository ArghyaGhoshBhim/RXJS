import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { Tutorial1Component } from './dashboard/practice001.component';


export const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"tutorial1",component:Tutorial1Component},
  {path:"", redirectTo:'/home', pathMatch:'full'}
];
