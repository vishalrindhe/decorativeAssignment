import { Component, Input, OnInit } from '@angular/core';
import Info from '../../assets/info.json'
import UserInfo from '../../assets/userInfo.json'
import { InteractionService } from '../interaction.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers:[InteractionService]

})
export class UserInfoComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  public userList:{userId:number,id:number,title:string,body:string}[]=UserInfo;


  @Input() dataUserId:any
  @Input() dataId:any
  // @Input() userData:any
  public userData:any
  public userData1:any
  data:any
  message: any;
  subscription: any;


  constructor(private interaction: InteractionService) { 
    console.warn(this.interaction.getData())
    this.data = this.interaction.getData()

  }
 
  ngOnInit() {
  //  this.interaction.item22$
  //   .subscribe(
  //     message =>{
  //       // alert(message)
  //       this.userData1= message
        
  //     }
  //   )
    
    
    // console.log("data:",this.userData);

    // this.subscription = this.interaction.getClickCall().subscribe(message => {

    //   this.message = message;
      
    //   console.log('---button clicked at another component---');
      
      //call you action which need to execute in this component on button clicked
      
      // });
    
  }

}
