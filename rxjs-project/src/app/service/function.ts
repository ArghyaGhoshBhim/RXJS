import { Observable } from "rxjs";

export function functionObs(){
  console.log("Function called!");
  return 1;

}

export const functionObservable$=new Observable(observer=>{
  console.log("Observable called!");
  observer.next(1);
  observer.next(2);
  setTimeout(()=>{
    observer.next(3);
  }, 2000)

})
