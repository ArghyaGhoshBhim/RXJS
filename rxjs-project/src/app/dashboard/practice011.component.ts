import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, bufferToggle, fromEvent, interval, take, tap } from "rxjs";

@Component({
  selector:"tutorial11",
  standalone: true,
  template:`
  <h1>17. BufferToggle Operator. Learn RxJS transformation operator BufferToggle - RxJS</h1>
  <h3>Component Name: (practice011.component.ts)</h3>
  <h3>Check console</h3>
  <button (click)="closeAllSubscription()">Close all Subscription</button>
  <h2>BufferToggle</h2>
  <a href="https://rxjs.dev/api/operators/bufferToggle" target="_blank">Documentation</a>


  `
})
export class Tutorial11Component implements OnInit{
  openBufferObservable$!:Observable<Event>;
  closeBufferObservable$!:Observable<Event>;
  subscriptionObs!:Subscription
constructor(){}

  ngOnInit(): void {
    let bufferOpen=interval(6000).pipe(tap(data=>console.log("tutorial11: buffer opend")
    ));
    let bufferClosed=(data:number)=>interval(3000).pipe(tap(()=>{
      console.log("tutorial11: buffer closed")

    }))
    this.subscriptionObs=interval(1000).pipe(tap(data=>console.log(data)),bufferToggle(bufferOpen, bufferClosed), take(3)).subscribe(data=>{
      console.log(data)
    })

  //   this.openBufferObservable$=fromEvent(document.getElementById('open-buffer')!, 'click')
  //   this.openBufferObservable$=fromEvent(document.getElementById('close-buffer')!, 'click')

  //  this.subscriptionObs = interval(1000).pipe(tap(data=>console.log(data)),bufferToggle( this.openBufferObservable$,
  //     ()=>  this.openBufferObservable$)).
  //     subscribe(data=>{
  //     console.log(data)
  //   })
  }






  closeAllSubscription(){
    console.log("tutorial11: close all the observable subscription");
    this.subscriptionObs.unsubscribe()
  }
}
