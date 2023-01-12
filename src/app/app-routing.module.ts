import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArgentinaComponent } from './pages/paises/argentina/argentina.component';
import { ChileComponent } from './pages/paises/chile/chile.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { PeruComponent } from './pages/paises/peru/peru.component';
import { UruguayComponent } from './pages/paises/uruguay/uruguay.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //redireccionar al Home
  {path: 'login', component:LoginComponent}, //redireccionar al Login
  {path: 'paises', component:PaisesComponent,
    children:[
      {path:'',component:ChileComponent}, //por defecto muestra a Chile
      {path:'peru',component:PeruComponent}, //redireccionar a Perú
      {path:'uruguay',component:UruguayComponent}, //redireccionar a Uruguay
      {path:'argentina',component:ArgentinaComponent} //redireccionar a Argentina
    ]}, //redireccionar a Países
  {path: '404', component:NotFoundComponent},//página de url no encontrada
  {path: '**', pathMatch:'full',redirectTo:'404'}//Cualquier url redirija al 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
