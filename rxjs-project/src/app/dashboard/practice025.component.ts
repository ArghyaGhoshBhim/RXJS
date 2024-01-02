import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, fromEvent, interval, sample, tap } from "rxjs";


@Component({
  selector:"tutorial25",
  standalone:true,
  template:`
   <h1>31. RxJS Sample Operator. Learn RxJS Filtering Category Sample Operator - RxJS.</h1>
  <h3>Component Name: (practice025.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>sample</h1>
  <a href="https://rxjs.dev/api/operators/sample" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startFilter()">click to start interval</button>
  <button id="simple-operator">click to check the Simple Operator</button>
  <br><br>
<br>  `
})
export class Tutorial25Component implements OnDestroy, AfterViewInit{

  // skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  sampleFilterButton$!:Observable<Event>;
  ngAfterViewInit(): void {
    this.sampleFilterButton$=fromEvent(document.getElementById('simple-operator')!, 'click');
  }

  startFilter():void{
    this.subscriptionObs1 = interval(1000).pipe(tap(x=>console.log("tutorial25: interval data ", x)
    ),sample(this.sampleFilterButton$)).subscribe(data=>{
    console.log("tutorial25: data in startFilter method is ", data);
    })
  }

  closeAllSubscription():void{
    console.log("tutorial25: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe();
  }


  ngOnDestroy(): void {
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe();
  }

}
