import { AfterViewInit, Component } from "@angular/core";
import { from, fromEvent } from "rxjs";

@Component({
  selector:'tutorial1',
  standalone:true,
  template:`
  <h1> Convert JavaScript arrays, Document Event Handlers and promises to RxJS Observables - RxJS</h1>
  <h3>Check console</h3>

  <p>Convert an event in to Observable: <button id='click-btn'>click</button></p>
  `
})
export class Tutorial1Component implements AfterViewInit{
messages:string|undefined;
  postArray=[
    {title:"Title1", description:"Title1 description"},
    {title:"Title2", description:"Title2 description"},
    {title:"Title3", description:"Title3 description"}

  ]
   //convert JavaScript arrays to Observables
  postArrayObservable$=from(this.postArray);

  promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Resolve the promise and sending the data!')
    }, 3000)
  })

  // convert promise to Observables
  promiseObservable$=from(this.promise);

  constructor(){

    //convert JavaScript arrays to Observables
    this.postArrayObservable$.subscribe({
      next:(data)=>console.log(data),
      error: error=>console.log(error),
      complete: ()=>console.log("postArrayObservable has been completed!")
    })

    // convert promise to Observables
    this.promiseObservable$.subscribe({
      next:(data)=>console.log(data),
      error: error=>console.log(error),
      complete: ()=>console.log("promiseObservable has been completed!")
    })
  }
  ngAfterViewInit(): void {
    //convert event to Observable ---- click on button in dom
    fromEvent(document.getElementById('click-btn')!, 'click').subscribe({
      next:(data)=>console.log(data),
      error: error=>console.log(error),
      complete: ()=>console.log("eventObservable has been completed!")//this line will not run as it will wait for next click
    })
  }



}
