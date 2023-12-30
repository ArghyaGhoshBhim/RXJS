import { Component } from "@angular/core";
import { Subscription, distinctUntilChanged, from, of } from "rxjs";

@Component({
  selector:"tutorial22",
  standalone:true,
  template:`
   <h1>28. RxJS DistinctUntilChanged Operator. Learn RxJS Filtering Category DistictUntilChanged - RxJS</h1>
  <h3>Component Name: (practice022.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h1>DistictUntilChanged</h1>
  <a href="https://rxjs.dev/api/operators/distictUntilChanged" target="_blank">Documentation</a>
  <h3>Start timer first and check console</h3>
  <button (click)="distictUntilChanged1()">Check with distictUntilChanged1 method</button><br><br>
  <button (click)="distictUntilChanged2()">Check with distictUntilChanged2 method</button><br><br>
  <button (click)="distictUntilChanged3()">Check with distictUntilChanged3 method</button>
<br>  `
})
export class Tutorial22Component {
  // skipUntilButton$!:Observable<Event>;
  subscriptionObs1!:Subscription;
  subscriptionObs2!:Subscription;
  subscriptionObs3!:Subscription;
  subscriptionObs4!:Subscription;



  distictUntilChanged1(){
    this.subscriptionObs1=of(1, 2, 2, 1, 3,1,3).pipe(distinctUntilChanged()).subscribe(data=>{
    console.log("tutorial22: the first output data from distictUntilChanged1 ", data);
    })
    //output: 1, 2, 1, 3, 1, 3
  }
  distictUntilChanged2(){
    this.subscriptionObs2=of(1, 2, 3, 4, 5).pipe(distinctUntilChanged((prev, curr)=>{
      return curr==prev+1;
    })).subscribe(data=>{
    console.log("tutorial22: the first output data from distictUntilChanged2 ", data);
    })
    //output: 1, 3, 5
  }

  distictUntilChanged3(){
    const employees=[
      {id:1, name:"name3"},
      {id:3, name:"name"},
      {id:1, name:"arghyname2"},
      {id:2, name:"name1"},
      {id:4, name:"name"},
      {id:5, name:"name"},

    ]
    // this.subscriptionObs3=from(employees).pipe(distinctUntilChanged((prev, curr)=>{
    //   return curr.name==prev.name;
    // })).subscribe(data=>{
    // console.log("tutorial22: the first output data from distictUntilChanged3 ", data);
    // })

    this.subscriptionObs4=from(employees).pipe(distinctUntilChanged((prev, curr)=>{
      return curr==prev;
    }, k=>k.name)).subscribe(data=>{
    console.log("tutorial22: the first output data from distictUntilChanged3 ", data);
    })


    //same out put for both subscriptionObs3, subscriptionObs4
  }

  closeAllSubscription():void{
    console.log("tutorial22: close all the observable subscription");
    if(this.subscriptionObs1)
    this.subscriptionObs1.unsubscribe()
    if(this.subscriptionObs2)
    this.subscriptionObs2.unsubscribe()
    if(this.subscriptionObs3)
    this.subscriptionObs3.unsubscribe()
    if(this.subscriptionObs4)
    this.subscriptionObs4.unsubscribe()

  }
}
