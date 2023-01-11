import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NotFoundComponent,
    LoginComponent
  ]
})
export class PagesModule { }
