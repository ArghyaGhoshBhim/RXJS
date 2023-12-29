import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Observable, Subscription, fromEvent, interval, takeUntil } from "rxjs";

@Component({
  selector:"tutorial15",
  standalone:true,
  template:`
   <h1>21. RxJS TakeUntil Operator. Learn RxJS Filtering Category TakeUntil Operator - RxJS</h1>
  <h3>Component Name: (practice015.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>takeUntil</h1>
  <a href="https://rxjs.dev/api/operators/takeUntil" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startTimer()">Start Timer</button>
<br>
<h3>Click to take the value from source Observable</h3>
  <button id="take-until">Take Until</button>


  `
})
export class Tutorial15Component implements AfterViewInit{
  untilBtnClicked!:Observable<Event>;
  subscriptionObs!:Subscription;
  ngAfterViewInit(): void {
    this.untilBtnClicked=fromEvent(document.getElementById("take-until")!, 'click');
  }


  startTimer():void{
    this.subscriptionObs= interval(1000).pipe(takeUntil(this.untilBtnClicked)).subscribe(data=>{
      console.log("tutorial15: data ", data);
    },
    error=>console.log("tutorial15: error", error),
    ()=>console.log("tutorial15: completed!!")

    )

  }

  closeAllSubscription():void{
    console.log("tutorial15: close all the observable subscription");
    this.subscriptionObs.unsubscribe()
  }

}
