import { Component, OnInit } from "@angular/core";
import { functionObs, functionObservable$ } from "../service/function";

@Component({
  selector:"tutorial3",
  standalone: true,
  template:`
  <h1>7. Observables vs Functions. Understand the similarities & differences between them - RxJS.</h1>
  <h3>Component Name: (practice003.component.ts)</h3>
  <h3>Check console</h3>
  <h4>Observables VS Function</h4>
  <ul>
    <li>Observable and function one in the same.</li>
    <li>Observable can return multiple value but function can't return multiple value.</li>
    <li>Observable can return async data but function can't do it.</li>
  </ul>
  `
})
export class Tutorial3Component implements OnInit{
  ngOnInit(): void {
    console.log("Before calling the funtion");
    console.log(functionObs());
    console.log("After calling function");

    console.log("Before calling the Observable");
    functionObservable$.subscribe(data=>{
      console.log(data);
    })
    console.log("After calling the Observable");
  }

}
