import {  Component } from "@angular/core";
import {  Subscription,  bufferCount, bufferTime, interval } from "rxjs";

@Component({
  selector:"tutorial9",
  standalone: true,
  template:`
  <h1>15. RxJS BufferCount operator. Learn BufferCount operator in Transformation Category - RxJS</h1>
  <h3>Component Name: (practice009.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>bufferCount</h2>
  <a href="https://rxjs.dev/api/operators/bufferCount" target="_blank">Documentation</a>
  <p>First click on the below button</p>
  <h3>check bufferCount with one parameter bufferCount(3) (change the param and check the output)</h3>
  <button  (click)="startIntervalWithOnePramInBufferCount()" [disabled]="disableStartInterval1">Click to startInterval with one bufferCount</button>
  <h3>check bufferCount with two parameterbufferCount(3, 2) (change the param and check the output)</h3>
  <button  (click)="startIntervalWithTwoPramInBufferCount()" [disabled]="disableStartInterval2">Click to startInterval with two bufferCount</button>

  `
})
export class Tutorial9Component{
  subscription1!:Subscription;
  subscription2!:Subscription;
  disableStartInterval1=false;
  disableStartInterval2=false;



  startIntervalWithOnePramInBufferCount(){
    this.disableStartInterval1=true;
    //bufferContent with one parameter bufferCount(3)
    this.subscription1 = interval(1000).pipe(bufferCount(3)).subscribe(data=>{
      console.log("tutorial9: with one parameter ", data)
    })


  }

  startIntervalWithTwoPramInBufferCount(){
//bufferContent with two parameter bufferCount(3, 2)
this.disableStartInterval2=true;
this.subscription2 = interval(1000).pipe(bufferCount(3, 2)).subscribe(data=>{
  console.log("tutorial9: with two parameter ", data)
})
  }

  closeAllSubscription(){
    this.disableStartInterval1=false;
    this.disableStartInterval2=false;

    console.log("tutorial9: close all the observable subscription");
    if(!!this.subscription1)
    this.subscription1.unsubscribe()
    if(!!this.subscription2)
    this.subscription2.unsubscribe()
  }
}
