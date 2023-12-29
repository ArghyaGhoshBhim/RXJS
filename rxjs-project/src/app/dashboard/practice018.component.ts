import { Component } from "@angular/core";
import { Subscription, interval, of, skipLast, tap } from "rxjs";


@Component({
  selector:"tutorial18",
  standalone:true,
  template:`
   <h1>24. RxJS SkipLast Operator. Learn RxJS Filtering Category SkipLast Operator - RxJS</h1>
  <h3>Component Name: (practice018.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>SkipLast</h1>
  <a href="https://rxjs.dev/api/operators/skipLast" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>

  <button (click)="startTimerForOf()">Start Timer for Of</button><br><br>
  <button (click)="startTimerForInterval()">Start Timer for Interval</button>

<br>  `
})
export class Tutorial18Component{
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;


  startTimerForOf(){
    this.subscriptionObs1=of(1,2,3,4,5).pipe(skipLast(2)).subscribe(data=>{
      console.log("tutorial18: data from startTimerForOf ", data);
    },
    error=>console.log("tutorial18: error from startTimerForOf ", error),
    ()=>console.log("tutorial18: startTimerForOf completed!")
    )
  }
  startTimerForInterval(){
    this.subscriptionObs2=interval(500).pipe(tap(i=>console.log("tutorial18: data from startTimerForInterval tap data ", i)
    ),skipLast(10)).subscribe(data=>{
      console.log("tutorial18: data from startTimerForInterval ", data);
    },
    error=>console.log("tutorial18: error from startTimerForInterval ", error),
    ()=>console.log("tutorial18: startTimerForInterval completed!")
    )
  }

  closeAllSubscription():void{
    console.log("tutorial18: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }

}
