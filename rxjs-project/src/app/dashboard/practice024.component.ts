import { Component, OnDestroy } from "@angular/core";
import { Subscription, filter, of } from "rxjs";


@Component({
  selector:"tutorial24",
  standalone:true,
  template:`
   <h1>30. RxJS Filter Operator. Learn RxJS Filtering category Filter Operator - RxJS</h1>
  <h3>Component Name: (practice024.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>Filter</h1>
  <a href="https://rxjs.dev/api/operators/filter" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startFilter()">Check with start Filter method</button><br><br>
<br>  `
})
export class Tutorial24Component implements OnDestroy{

  // skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;


  startFilter(){
    this.subscriptionObs1 = of(1,2,3,4,5).pipe(filter(x=>x>=3)).subscribe(data=>{
    console.log("tutorial24: data in startFilter method is ", data);
    })
  }

  closeAllSubscription():void{
    console.log("tutorial24: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe();
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe();

  }


  ngOnDestroy(): void {
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe();
  }

}
