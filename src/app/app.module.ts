import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';

import { NoticiasService } from './service/noticias.service';
import { EditarComponent } from './components/crud/editar/editar.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MailService } from './service/mail.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    EditarComponent,
    BeneficiosComponent,
    NoticiasComponent,
    NoticiaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    NoticiasService,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
