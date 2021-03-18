import { Component, Input, OnInit } from '@angular/core';
import Info from '../../assets/info.json'


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;

  @Input() dataUserId:any
  @Input() dataId:any

  constructor() {
    // console.log("data:",this.data);
    
   }

  ngOnInit(): void {
    // console.log("data:",this.data);

  }

}
