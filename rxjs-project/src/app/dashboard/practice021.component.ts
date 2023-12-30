import { Component } from "@angular/core";
import { Subscription, distinct, from, of } from "rxjs";

@Component({
  selector:"tutorial21",
  standalone:true,
  template:`
   <h1>27. RxJS Distinct Operator. Learn RxJS Filtering Category Distinct Operator - RxJS.</h1>
  <h3>Component Name: (practice021.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>Distinct(depends on last emited value)</h1>
  <a href="https://rxjs.dev/api/operators/distinct" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="startDistinct1()">strat distinct for observable of number</button>(will remove all duplicate)<br><br>
  <h3>Filter all the object with same name</h3>
  <button (click)="startDistinct2()">strat distinct for observable of number</button>


<br>  `
})
export class Tutorial21Component {
  // skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;

  startDistinct1(){
    this.subscriptionObs1=of(1,2,3,2,4,1,5).pipe(distinct()).subscribe(data=>{
    console.log("tutorial21: data of startDistinct1 method ", data);
    })

  }
  startDistinct2(){
    const employees=[
      {id:1,name:"arghya", age:23},
      {id:2,name:"bappa", age:24},
      {id:3,name:"arghya", age:27},
      {id:4,name:"debjit", age:23},


    ]

    this.subscriptionObs2=from(employees).pipe(distinct((data)=>data.name)).subscribe(data=>{
    console.log("tutorial21: data of startDistinct2 method ", data);

    })
  }
  closeAllSubscription():void{
    console.log("tutorial21: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }
}
