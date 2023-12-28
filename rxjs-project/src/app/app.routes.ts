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

 {path:"", redirectTo:'/home', pathMatch:'full'}
];
