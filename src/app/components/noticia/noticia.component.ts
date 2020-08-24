import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'


import { NoticiasService } from '../../service/noticias.service'


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  providers: [NoticiasService]
})
export class NoticiaComponent implements OnInit {
  id: any
  noticia: any
  verVolver: boolean
  verSiguiente: boolean
  ultimaNoticias
  idnoticia


  constructor(
    private _activateRouter: ActivatedRoute,
    private _noticiasService: NoticiasService,
    private _router: Router
  ) {
    this.verVolver = true
    this.verSiguiente = true
   }

  ngOnInit():any {
    /* this._noticiasService.getUltimaNoticia().subscribe(
      res =>{
        this.ultimaNoticias = res
      }
    )
    this.cargarNoticia()
    if(+this.id <= 1){
      this.verVolver = false          
    }else{
      this.verVolver = true
    }     */
  }

  cargarNoticia(){
    this.id = +this._activateRouter.snapshot.paramMap.get('id')
    this._noticiasService.getNoticia(this.id).subscribe(
      res => {
        this.noticia = res        
      },
      err => console.error(err)
    )    
  }

  anterior(){
    if(+this.id < 2){
      this.verVolver = false
    }else{
      this.verVolver = true
      this.verSiguiente = true
      this.id = this.id - 1 
      this._router.navigate(['/noticias/' + this.id])
      this._noticiasService.getNoticia(this.id).subscribe(
        res => {
          this.noticia = res
        },
        err => console.error(err)
      )
      if(+this.id <= 1){
        this.verVolver = false          
      }
    }
  }

  
  siguiente(id){  
    if(this.id >= id){
      this.verSiguiente = false
    }else{
      this.verVolver = true
      this.verSiguiente = true
      this.id = this.id + 1 
      this._router.navigate(['/noticias/' + this.id])
      this._noticiasService.getNoticia(this.id).subscribe(
        res => {
          this.noticia = res
        },
        err => console.error(err)
      )
      if(this.id >= id){
        this.verSiguiente = false
      }
    }
  }

}
