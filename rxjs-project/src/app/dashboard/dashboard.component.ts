import { Component } from "@angular/core";
import { HomeComponent } from "./home.component";

@Component({
  selector: 'right-dashboard',
  standalone:true,
  imports:[HomeComponent],
  templateUrl:'./dashboard.component.html',

})
export class DashboardComponent{

}
