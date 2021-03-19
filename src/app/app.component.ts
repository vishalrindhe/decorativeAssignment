import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Info from '../assets/info.json'
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private router: Router) { }

  public infoList:{userId:number,id:number,title:string,body:string}[]=Info;
  title = 'Abcd';
}

// constructor(private interaction: InteractionService, private router: Router) { }
