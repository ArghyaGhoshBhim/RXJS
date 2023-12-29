import { Component } from "@angular/core";
import { Subscription, interval, takeWhile } from "rxjs";


@Component({
  selector:"tutorial16",
  standalone:true,
  template:`
   <h1>22. RxJS TakeWhile Operator. Learn RxJS Filtering Category TakeWhile Operator in RxJS</h1>
  <h3>Component Name: (practice016.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>TakeWhile</h1>
  <a href="https://rxjs.dev/api/operators/takeUntil" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startTimer()">Start Timer</button>
<br>  `
})
export class Tutorial16Component{

  subscriptionObs!:Subscription;


  startTimer():void{
    this.subscriptionObs= interval(1000).pipe(takeWhile((data)=>data<5)).subscribe(data=>{
      console.log("tutorial16: data ", data);
    },
    error=>console.log("tutorial16: error", error),
    ()=>console.log("tutorial16: completed!!")

    )

  }

  closeAllSubscription():void{
    console.log("tutorial16: close all the observable subscription");
    this.subscriptionObs.unsubscribe()
  }

}
