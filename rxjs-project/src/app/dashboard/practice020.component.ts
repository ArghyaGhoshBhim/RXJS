import { Component, AfterViewInit } from "@angular/core";
import { Observable, Subscription, fromEvent, interval, of, skipUntil, skipWhile } from "rxjs";

@Component({
  selector:"tutorial20",
  standalone:true,
  template:`
   <h1>26. RxJS SkipWhile Operator. Learn RxJS Filtering Category SkipWhile Operator - RxJS</h1>
  <h3>Component Name: (practice020.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>SkipWhile</h1>
  <a href="https://rxjs.dev/api/operators/skipWhile" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startTimer()">strat timer</button>

<br>  `
})
export class Tutorial20Component {
  skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;

  startTimer(){
    this.subscriptionObs1=of(1,2,3,4,5, 1, 2, 3).pipe(skipWhile(x=>x<3)).subscribe(data=>{
      console.log("tutorial20: data from startTimerForOf ", data);
    },
    error=>console.log("tutorial18: error ", error),
    ()=>console.log("tutorial20: completed!")
    )
  }

  closeAllSubscription():void{
    console.log("tutorial20: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }

}
