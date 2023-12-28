import {  Component } from "@angular/core";
import { Subscription,bufferTime,  interval } from "rxjs";

@Component({
  selector:"tutorial10",
  standalone: true,
  template:`
  <h1>16. RxJS BufferTime Operator. Learn Buffer Time Operator in RxJS Transformation Operators - RxJS</h1>
  <h3>Component Name: (practice010.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>bufferTime</h2>
  <a href="https://rxjs.dev/api/operators/bufferTime" target="_blank">Documentation</a>
  <p>First click on the below button</p>
  <h3>check bufferCount with one parameter bufferTime(2000, 2000) (change this param vlaue and check)</h3>
  <button  (click)="startIntervalWithOnePramInBufferCount()" [disabled]="disableStartInterval1">Click to startInterval with one bufferTime</button>
  <h3>check bufferCount with two parameter bufferTime(2000, 2000) (change this param vlaue and check)</h3>
  <button  (click)="startIntervalWithTwoPramInBufferCount()" [disabled]="disableStartInterval2">Click to startInterval with two bufferTime</button>

  `
})
export class Tutorial10Component{
  subscription1!:Subscription;
  subscription2!:Subscription;
  disableStartInterval1=false;
  disableStartInterval2=false;



  startIntervalWithOnePramInBufferCount(){
    this.disableStartInterval1=true;
    //bufferContent with one parameter bufferTime(2000)
    this.subscription1 = interval(1000).pipe(bufferTime(2000)).subscribe(data=>{
      console.log("tutorial10: with one parameter ", data)
    })


  }

  startIntervalWithTwoPramInBufferCount(){
//bufferContent with two parameter bufferTime(2000, 1000)
this.disableStartInterval2=true;
this.subscription2 = interval(1000).pipe(bufferTime(2000, 2000)).subscribe(data=>{
  console.log("tutorial10: with two parameter ", data)
})
}

  closeAllSubscription(){
    this.disableStartInterval1=false;
    this.disableStartInterval2=false;

    console.log("tutorial10: close all the observable subscription");
    if(!!this.subscription1)
    this.subscription1.unsubscribe()
    if(!!this.subscription2)
    this.subscription2.unsubscribe()
  }
}
