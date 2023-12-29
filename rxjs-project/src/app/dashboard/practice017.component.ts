import { Component } from "@angular/core";
import { Subscription, interval, skip, take } from "rxjs";


@Component({
  selector:"tutorial17",
  standalone:true,
  template:`
   <h1>23. RxJS Skip Operator. Learn RxJS Filtering category Skip Operator - RxJS</h1>
  <h3>Component Name: (practice017.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>Skip</h1>
  <a href="https://rxjs.dev/api/operators/skip" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startTimer()">Start Timer</button>
<br>  `
})
export class Tutorial17Component{

  subscriptionObs!:Subscription;


  startTimer():void{
    this.subscriptionObs= interval(500).pipe(take(10),skip(5)).subscribe(data=>{
      console.log("tutorial17: data ", data);
    },
    error=>console.log("tutorial17: error", error),
    ()=>console.log("tutorial17: completed!!")

    )

  }

  closeAllSubscription():void{
    console.log("tutorial17: close all the observable subscription");
    this.subscriptionObs.unsubscribe()
  }

}
