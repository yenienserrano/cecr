import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { EditarComponent } from './components/crud/editar/editar.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'beneficios-de-socio', component: BeneficiosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'noticia', component: NoticiaComponent},
  {path: 'crudNoticias', component: CrudComponent},
  {path: 'crudNoticias/:id', component: EditarComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
