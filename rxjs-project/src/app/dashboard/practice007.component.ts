import { Component, OnInit } from "@angular/core";
import { Subscription, filter, interval, map } from "rxjs";

@Component({
  selector:"tutorial7",
  standalone: true,
  template:`
  <h1>11. Implement multiple operators for observable using pipe method in RxJS</h1>
  <h3>Component Name: (practice007.component.ts)</h3>
  <h3>Check console</h3>
<button (click)="unsubscribeMethod()">Click to unsubscribe all the observable</button>
<h2>map & filter Operator</h2>
  `
})
export class Tutorial7Component implements OnInit{
  observable1!:Subscription;
  observable2!:Subscription

  ngOnInit(): void {
    const newObservable$=interval(1000);
   this.observable1= newObservable$.subscribe(data=>{
      if(data%2===0){
        console.log("tutorial7: Event is-", data)
      }
    })

    this.observable2=newObservable$.pipe(filter(data=>data%2===0), map(data=>{
      return  "tutorial7: From pipe Event is-"+ data;
    })).subscribe(data=>{
      console.log(data);
    })
  }

  unsubscribeMethod(){
    console.log("tutorial7: Unsubscribe all the subscription!");

    this.observable1.unsubscribe();
    this.observable2.unsubscribe()
  }
}
