import { AfterViewInit, Component } from "@angular/core";
import { Observable, Subscription, buffer, fromEvent, interval, tap } from "rxjs";

@Component({
  selector:"tutorial8",
  standalone: true,
  template:`
  <h1>14. RxJS Buffer Operator. Understand about Buffer Operator in Transformation Category - RxJS</h1>
  <h3>Component Name: (practice008.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>Buffer</h2>
  <a href="https://rxjs.dev/api/operators/buffer" target="_blank">Documentation</a>
  <p>First click on the below button</p>
  <button (click)="startInterval()">Click to startInterval</button>
  <button id="show-data">Show the buffer data</button>
  <div>
    @for (item of timerItem; track $index) {
      <h4>{{item}}</h4>
    }
  </div>

  `
})
export class Tutorial8Component implements AfterViewInit{
  showData$!:Observable<Event>;
  startIntervalSubscription!:Subscription;
  timerItem:number[]=[]
  ngAfterViewInit(): void {
   this.showData$=fromEvent(document.getElementById('show-data')!,'click');
  }

  startInterval(){
    this.startIntervalSubscription = interval(1000).pipe(tap(data=>{
      console.log('tutorial8: from tap: '+data);
    }), buffer(this.showData$)).subscribe((data:number[])=>{
      this.timerItem.push(...data)
    })
  }

  closeAllSubscription(){
    console.log("tutorial8: close all the observable subscription");

    this.startIntervalSubscription.unsubscribe()
  }
}
