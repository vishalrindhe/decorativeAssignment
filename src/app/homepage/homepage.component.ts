import { Component, OnInit } from '@angular/core';
import Info from '../../assets/info.json'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  public userDataId: any
  public DataId: any


  constructor() { }

  ngOnInit(): void {
    // console.log(this.userDataId);
    
  }

  onItemClick( item: any, id: any)
  {
    console.log("Item: ",item, "id:", id);
    this.userDataId=item
    this.DataId=id

    console.log("userDataId:",this.userDataId);
    
  }
}
