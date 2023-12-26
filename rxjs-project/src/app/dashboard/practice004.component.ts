import { Component, OnInit } from "@angular/core";
import { Subscription, interval } from "rxjs";

@Component({
  selector:"tutorial4",
  standalone: true,
  template:`
  <h1>8. Cancelling the Subscribed Observable execution using the Subscription unsubscribe method - RxJS</h1>
  <h3>Component Name: (practice004.component.ts)</h3>
  <h3>Check console</h3>

  <button (click)="cancellingSubscription()">Click to cancel the Observable</button>
  `
})
export class Tutorial4Component implements OnInit{
  timerSubscription!:Subscription;
  ngOnInit(): void {
   const newObseevAble$=interval(1000);
   this.timerSubscription=newObseevAble$.subscribe(data=>{
    console.log(new Date().toLocaleTimeString()+" value is tutorial4"+ data);
   })

  }
  cancellingSubscription(){
    console.log('You have canceled the subscription of  newObseevAble$ tutorial4');

    this.timerSubscription.unsubscribe();
  }


}
