import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //redireccionar al Home
  {path: 'login', component:LoginComponent}, //redireccionar al Login
  {path: '404', component:NotFoundComponent},//página de url no encontrada
  {path: '**', pathMatch:'full',redirectTo:'404'}//Cualquier url redirija al 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
