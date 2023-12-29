import { Component, OnInit } from "@angular/core";
import { Subscription, interval, take } from "rxjs";


@Component({
  selector:"tutorial13",
  standalone:true,
  template:`
   <h1>19. RxJS Take Operator. Learn RxJS Filtering Category Take Operator - RxJS</h1>
  <h3>Component Name: (practice013.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>take</h2>
  <a href="https://rxjs.dev/api/operators/take" target="_blank">Documentation</a>


  `
})
export class Tutorial13Component implements OnInit{

  subscriptionObs!:Subscription;

  ngOnInit(): void {
    this.subscriptionObs=interval(500).pipe(take(5)).subscribe(data=>{
      console.log("tutorial13: data", data)
    },
    error=>console.log("tutorial13: error", error),
    ()=>console.log("tutorial13: completed")

    )
  }



    closeAllSubscription(){
      console.log("tutorial13: close all the observable subscription");
      this.subscriptionObs.unsubscribe()
    }




}
