import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Info from '../../assets/info.json'
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:[InteractionService]
})
export class HomepageComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  public userDataId: any
  public DataId: any
  public userData: any={}
  msgFromService :any



  constructor(private interaction: InteractionService) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

//   buttonClickedToCallObservable() {
//     this.interaction.sendClickCall('Sending message to another comp that button is clicked');
//  }

  ngOnInit(): void {
    // console.log(this.userDataId);

    // this.interaction.currentMsg.subscribe(
    //   (data: string) =>{
    //     this.msgFromService = data;
    //   }
    // )

  }

     // this.interaction.getItems(name);
    // window.alert('Your product has been added to the cart!');
    // const item= this.userData

  // getItems(data) {
 
  //   this.interaction.getItems()= this.userData
  // }

  onItemClick( user: any)
  {
    // console.log("Item: ",item, "id:", id);
    // this.userDataId=item
    // this.DataId=id
    console.log(user);
    this.userData=user
    // this.interaction.data(user)
    // console.log( "this.userData",this.);

    // console.log( "this.interaction.data(user)",this.interaction.data);
    // console.log("userDataId:",this.userDataId);
    
  }

  // onButtonClick(){
    // this.interaction.showData(this.userData);
    // console.log('onclick',this.interaction.item22$);
    
  // }



}
