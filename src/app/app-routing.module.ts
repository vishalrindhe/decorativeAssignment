import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path:'userinfo', component: UserInfoComponent },
  { path:'homepage', component: HomepageComponent },
  {path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserInfoComponent,HomepageComponent]
