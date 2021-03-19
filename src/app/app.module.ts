import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InteractionService } from './interaction.service';
import { GlobalConstantsComponent } from './global-constants/global-constants.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    routingComponents,
    HomepageComponent,
    GlobalConstantsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
