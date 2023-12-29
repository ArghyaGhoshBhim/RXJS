import { Component, OnInit } from "@angular/core";
import { Subscription, bufferWhen, interval, tap } from "rxjs";

@Component({
  selector:"tutorial12",
  standalone:true,
  template:`
   <h1>18. RxJS BufferWhen Operators. Learn RxJS Transformation Operator BufferWhen - RxJS</h1>
  <h3>Component Name: (practice011.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>bufferWhen</h2>
  <a href="https://rxjs.dev/api/operators/bufferWhen" target="_blank">Documentation</a>
  `
})
export class Tutorial12Component implements OnInit{
subscriptionObs!:Subscription;

ngOnInit(): void {
  let x=0;
this.subscriptionObs=  interval(1000).pipe(
  tap(i=>x=i),
    bufferWhen(()=>{
      if(x > 6){
        return interval(1000);
      }
      return interval(5000);
    })
  ).subscribe(data=>{
    console.log("tutorial12: ", data);

  })
}



  closeAllSubscription(){
    console.log("tutorial12: close all the observable subscription");

    this.subscriptionObs.unsubscribe()
  }


}
