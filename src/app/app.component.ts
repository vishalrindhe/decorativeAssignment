import { Component } from '@angular/core';
import Info from '../assets/info.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  title = 'Abcd';
}
