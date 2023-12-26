import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, interval } from "rxjs";

@Component({
  selector:"tutorial5",
  standalone: true,
  template:`
  <h1>9. Avoid Memory leakage when subscribing and unsubscribing Custom Observable by cleaning Code - RxJS</h1>
  <h3>Component Name: (practice005.component.ts)</h3>
  <h3>Check console</h3>

  <button (click)="cancellingSubscription()">Click to cancel the Observable</button>
  <p>If u clicked on the button the browser and console count will stop but the
    setInterval method will in console if we don't use return block in the newObseevAble$, so this will be cause of
    memory leakage.
  </p>
  <p>To stop this type of behaviour we have to use return in Observable, and this return block will run when we unsubscribe the Observable</p>
  @for (item of timeArray; track $index) {
    <div>{{item}}</div>
  }
  `
})
export class Tutorial5Component implements OnInit{
  timerConsoleSubscription!:Subscription;
  timerBrowserSubscription!:Subscription;
  timeArray:number[]=[]


  ngOnInit(): void {
    let i=0
   const newObseevAble$=new Observable<number>(observer=>{
    const setIntervalTimer=setInterval(()=>{
      console.log("Interval is executing!");

      observer.next(i++)
    },1000)

    //This return block will run when we unsubscribe this Observable.
    return ()=>{
      console.log("tutorial5: Called when we unsubscribe the Observable");
      //It will stop the running of interval after unsubcribe this Observable
      clearInterval(setIntervalTimer);
    }
   });
   this.timerConsoleSubscription=newObseevAble$.subscribe(data=>{
    console.log(new Date().toLocaleTimeString()+" value is in tutorial5 "+ data);
   })
   this.timerBrowserSubscription=newObseevAble$.subscribe(data=>{
    this.timeArray.push(data);
   })

  }
  cancellingSubscription(){
    console.log('You have canceled the subscription of  newObseevAble$ tutorial5');
    this.timerConsoleSubscription.unsubscribe();
    this.timerBrowserSubscription.unsubscribe();
  }


}
