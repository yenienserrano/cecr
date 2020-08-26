import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'



import { Global } from './global'

import { Noticias } from '../model/noticias'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = Global

  constructor(
    private _http: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) { }

  getNoticias(): Observable<Noticias>  {
    return this._http.get("/noticia.php")
  }

  get4Noticias(): Observable<Noticias>  {
    return this._http.get("/noticia.php")
  }

  getUltimaNoticia(): Observable<Noticias>  {
    return this._http.get("/noticia.php")
  }

  getNoticia(id: string): Observable<Noticias>  {
    return this._http.get("/noticia.php?id="+id)
  }

  editarNoticia(titulo: string, descripcion: string, imagen: File, id) {    
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descripcion', descripcion);
    fd.append('imagen', imagen);
    return this._http.put(this.url+"/noticias/" + id, fd);
  }

  borrarNoticia(id: string): Observable<Noticias>  {
    return this._http.delete(this.url + '/noticias/' + id)
  } 

  crearNoticia(titulo: string, descripcion: string, imagen: File) {    
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descripcion', descripcion);
    fd.append('imagen', imagen);
    return this._http.post(this.url+"/noticias" , fd);
  }
}
