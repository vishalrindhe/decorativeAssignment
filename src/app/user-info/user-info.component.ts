import { Component, Input, OnInit } from '@angular/core';
import Info from '../../assets/info.json'
import UserInfo from '../../assets/userInfo.json'
import { InteractionService } from '../interaction.service';
// import { Subscription } from 'rxjs/';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
  // providers:[InteractionService]

})
export class UserInfoComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  public userList:{userId:number,id:number,title:string,body:string}[]=UserInfo;


  @Input() dataUserId:any
  @Input() dataId:any
  // @Input() userData:any
  public userData:any
  public userData1:any
  public data:any = "abc"
  message: any;
  subscription: any;


  constructor(private interaction: InteractionService,private router: Router) { 
 

  }
 
  ngOnInit() {

    this.data = this.interaction.getData()
    console.log("from user info",this.data);
    
    
  }

}
