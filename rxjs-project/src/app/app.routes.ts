import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { Tutorial1Component } from './dashboard/practice001.component';
import { Tutorial2Component } from './dashboard/practice002.component';
import { Tutorial3Component } from './dashboard/practice003.component';
import { Tutorial4Component } from './dashboard/practice004.component';
import { Tutorial5Component } from './dashboard/practice005.component';


export const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"tutorial1",component:Tutorial1Component},
  {path:"tutorial2",component:Tutorial2Component},
  {path:"tutorial3",component:Tutorial3Component},
  {path:"tutorial4",component:Tutorial4Component},
  {path:"tutorial5",component:Tutorial5Component},


  {path:"", redirectTo:'/home', pathMatch:'full'}
];
