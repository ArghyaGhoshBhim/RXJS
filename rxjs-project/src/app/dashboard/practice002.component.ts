import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector:"tutorial1",
  standalone: true,
  template:`
  <h1>Create a new Custom Observable from scratch using the RxJS Observable object - RxJS</h1>
  <h3>Component Name: (practice002.component.ts)</h3>
  `
})
export class Tutorial2Component implements OnInit{
  ngOnInit(): void {
    const newObservable$=new Observable<number>(obsever=>{
      for(let i=0;i<5;i++){
        if(i==4){
          obsever.error('unknown error. i value is 4!')
        }
        obsever.next(i);
      }
      obsever.complete();

    })

    const obsever={
      next: (data:number)=>console.log(data),
      error: (error:string)=>console.log(error),
      complete: ()=>console.log("Observable is completed!")
    }

    newObservable$.subscribe(obsever)
  }

}
