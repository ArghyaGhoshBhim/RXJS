import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { Tutorial1Component } from './dashboard/practice001.component';
import { Tutorial2Component } from './dashboard/practice002.component';
import { Tutorial3Component } from './dashboard/practice003.component';
import { Tutorial4Component } from './dashboard/practice004.component';
import { Tutorial5Component } from './dashboard/practice005.component';
import { Tutorial6Component } from './dashboard/practice006.component';
import { Tutorial7Component } from './dashboard/practice007.component';
import { Tutorial8Component } from './dashboard/practice008.component';
import { Tutorial9Component } from './dashboard/practice009.component';
import { Tutorial10Component } from './dashboard/practice010.component';
import { Tutorial11Component } from './dashboard/practice011.component';
import { Tutorial12Component } from './dashboard/practice012.component';
import { Tutorial13Component } from './dashboard/practice013.component';
import { Tutorial14Component } from './dashboard/practice014.component';
import { Tutorial15Component } from './dashboard/practice015.component';
import { Tutorial16Component } from './dashboard/practice016.component';
import { Tutorial17Component } from './dashboard/practice017.component';


export const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"tutorial1",component:Tutorial1Component},
  {path:"tutorial2",component:Tutorial2Component},
  {path:"tutorial3",component:Tutorial3Component},
  {path:"tutorial4",component:Tutorial4Component},
  {path:"tutorial5",component:Tutorial5Component},
  {path:"tutorial6",component:Tutorial6Component},
  {path:"tutorial7",component:Tutorial7Component},
  {path:"tutorial8",component:Tutorial8Component},
  {path:"tutorial9",component:Tutorial9Component},
  {path:"tutorial10",component:Tutorial10Component},
  {path:"tutorial11",component:Tutorial11Component},
  {path:"tutorial12",component:Tutorial12Component},
  {path:"tutorial13",component:Tutorial13Component},
  {path:"tutorial14",component:Tutorial14Component},
  {path:"tutorial15",component:Tutorial15Component},
  {path:"tutorial16",component:Tutorial16Component},
  {path:"tutorial17",component:Tutorial17Component},






 {path:"", redirectTo:'/home', pathMatch:'full'}
];
