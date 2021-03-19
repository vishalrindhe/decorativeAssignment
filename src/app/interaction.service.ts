import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  public item:any
  public item2:any

  // private _teacher = new Subject<any>()
  // teacherMessage$ = this._teacher.asObservable()

  // private item222 = new Subject<any>()
  // item22$ = this.item222.asObservable()


  // data(user: any){
  //   return this.item=user

  // }

  getData(){
    return {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  }


  // private subject = new Subject<any>();

  // sendClickCall(message: string) {
  //     this.subject.next({ text: message });
  //    }
  
  // getClickCall(): Observable<any> {
  //     return this.subject.asObservable();
  //     }
  



}
