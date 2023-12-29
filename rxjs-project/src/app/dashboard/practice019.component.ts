import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Observable, Subscription, fromEvent, interval, skipUntil } from "rxjs";

@Component({
  selector:"tutorial19",
  standalone:true,
  template:`
   <h1>25. RxJS SkipUntil Operator. Learn RxJS Filtering Category SkipUntil Operator - RxJS.</h1>
  <h3>Component Name: (practice019.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>SkipUntil</h1>
  <a href="https://rxjs.dev/api/operators/skipUntil" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>

  <button id="skip-until">Show value after click</button><br><br>
  <!-- <button (click)="startTimerForInterval()">Start Timer for Interval</button> -->

<br>  `
})
export class Tutorial19Component implements AfterViewInit{
  skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;
  ngAfterViewInit(): void {
    this.skipUntilButton$=fromEvent(document.getElementById('skip-until')!, 'click');
    this.subscriptionObs1=interval(500).pipe(skipUntil(this.skipUntilButton$)).subscribe(data=>{
      console.log("tutorial19: data ", data);
    })
  }


  // startTimerForOf(){
  //   this.subscriptionObs1=of(1,2,3,4,5).pipe(skipLast(2)).subscribe(data=>{
  //     console.log("tutorial18: data from startTimerForOf ", data);
  //   },
  //   error=>console.log("tutorial18: error from startTimerForOf ", error),
  //   ()=>console.log("tutorial18: startTimerForOf completed!")
  //   )
  // }
  // startTimerForInterval(){
  //   this.subscriptionObs2=interval(500).pipe(tap(i=>console.log("tutorial18: data from startTimerForInterval tap data ", i)
  //   ),skipLast(10)).subscribe(data=>{
  //     console.log("tutorial18: data from startTimerForInterval ", data);
  //   },
  //   error=>console.log("tutorial18: error from startTimerForInterval ", error),
  //   ()=>console.log("tutorial18: startTimerForInterval completed!")
  //   )
  // }

  closeAllSubscription():void{
    console.log("tutorial18: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }

}
