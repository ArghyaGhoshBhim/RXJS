import { Component, OnInit } from "@angular/core";
import { Subscription, interval, take, takeLast } from "rxjs";

@Component({
  selector:"tutorial14",
  standalone:true,
  template:`
   <h1>20. RxJS TakeLast Operator. Learn RxJS Filtering Category TakeLast Operator - RxJS</h1>
  <h3>Component Name: (practice014.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>take</h2>
  <a href="https://rxjs.dev/api/operators/takeLast" target="_blank">Documentation</a>


  `
})
export class Tutorial14Component implements OnInit{

  subscriptionObs!:Subscription;
  ngOnInit(): void {
   this.subscriptionObs=interval(1000).pipe(take(10), takeLast(3)).subscribe(data=>{
  console.log("tutorial14: data ", data); })
  }


  closeAllSubscription(){
    console.log("tutorial14: close all the observable subscription");
    this.subscriptionObs.unsubscribe()
  }

}
