import { Component } from "@angular/core";
import { Subscription, distinctUntilKeyChanged, from } from "rxjs";

@Component({
  selector:"tutorial23",
  standalone:true,
  template:`
   <h1>29. RxJS DistinctUntilKeyChanged Operator - Filtering Category Operator in RxJS</h1>
  <h3>Component Name: (practice023.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>DistinctUntilKeyChanged</h1>
  <a href="https://rxjs.dev/api/operators/distinctUntilKeyChanged" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="distinctUntilKeyChanged1()">Check with distinctUntilKeyChanged1 method</button><br><br>
  <h3>distinctUntilKeyChanged(param1, param2)</h3>
  <button (click)="distinctUntilKeyChanged2()">Check with distinctUntilKeyChanged2 method</button><br><br>


<br>  `
})
export class Tutorial23Component {
  // skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;


  distinctUntilKeyChanged1(){
    const employees=[
      {id:1, name:"name3"},
      {id:3, name:"name"},
      {id:1, name:"arghyname2"},
      {id:2, name:"name1"},
      {id:4, name:"name"},
      {id:5, name:"name"},

    ]
    this.subscriptionObs1=from(employees).pipe(distinctUntilKeyChanged("name")).subscribe(data=>{
    console.log("tutorial23: the first output data from distinctUntilKeyChanged1 ", data);

    })

  }
  distinctUntilKeyChanged2(){
    const employees=[
      {id:1, name:"name3"},
      {id:3, name:"name"},
      {id:1, name:"arghyname2"},
      {id:2, name:"nbame1"},
      {id:4, name:"name44"},
      {id:5, name:"name1"},

    ]
    this.subscriptionObs1=from(employees).pipe(distinctUntilKeyChanged("name",(prev, curr)=>{
      return curr.substring(0, 3)===prev.substring(0,3);
    }),).subscribe(data=>{
    console.log("tutorial23: the first output data from distinctUntilKeyChanged1 ", data);

    })

  }

  closeAllSubscription():void{
    console.log("tutorial23: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()

  }
}
