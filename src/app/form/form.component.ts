import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  data:any=[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }


  onSubmit(userId: any,id: any,title: string,body: string){
    this.data.push({userId,id,title,body})
    // this.data.push(id)
    // this.data.push(title)
    // this.data.push(body)
    console.log(this.data);
    

  }
}
