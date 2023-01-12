import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisesComponent } from './paises/paises.component';
import { RouterModule } from '@angular/router';
import { ChileComponent } from './paises/chile/chile.component';
import { ArgentinaComponent } from './paises/argentina/argentina.component';
import { UruguayComponent } from './paises/uruguay/uruguay.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    PaisesComponent,
    ChileComponent,
    ArgentinaComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    PaisesComponent
  ]
})
export class PagesModule { }
