import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Info from '../../assets/info.json'
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
  // providers:[InteractionService]
})
export class HomepageComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  public Filterarray=this.infoList.filter(infoList=>infoList.userId==1);
  public userDataId: any
  public DataId: any
  public userData: any
  msgFromService :any



  constructor(private interaction: InteractionService, private router: Router) { }
  

  onItemClick( user: any)
  {
 
    this.interaction.setData(user)
    this.router.navigate(['/userinfo'])
    
  }
  ngOnInit(){
  
  }
  // onButtonClick(){
    // this.interaction.showData(this.userData);
    // console.log('onclick',this.interaction.item22$);
    
  // }

}
