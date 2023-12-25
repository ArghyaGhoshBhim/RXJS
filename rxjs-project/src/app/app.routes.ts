import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { Tutorial1Component } from './dashboard/practice001.component';
import { Tutorial2Component } from './dashboard/practice002.component';


export const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"tutorial1",component:Tutorial1Component},
  {path:"tutorial2",component:Tutorial2Component},
  {path:"", redirectTo:'/home', pathMatch:'full'}
];
