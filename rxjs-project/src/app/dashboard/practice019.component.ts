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



  closeAllSubscription():void{
    console.log("tutorial19: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }

}
