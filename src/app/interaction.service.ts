import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { Observable } from 'rxjs';
// import { GlobalConstants } from './global-constants'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  public item:any = ""

  getData(){
    console.log('from get data',this.item);

    return this.item
    
  }

  setData(obj: any)
  {
    this.item = obj 
    console.log("from set data",this.item);
    
  }


}
