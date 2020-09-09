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
  imagenes: any = []
  verVolver: boolean
  verSiguiente: boolean
  ultima: any
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

    this._noticiasService.get4Noticias().subscribe(
      res => {
        this.ultima = res        
        err =>{
          console.log(err)
        }
      }
    )
    console.log(this.ultima)
    
    this.cargarNoticia()
    

    if(+this.id <= 1){
      this.verVolver = false          
    }else{
      this.verVolver = true
    }    
  }
  pruebaNoticias:any
  cargarNoticia(){
    this.id = +this._activateRouter.snapshot.paramMap.get('id')
    this._noticiasService.getNoticia(this.id).subscribe(
      res => {
        this.noticia = res 
        this.pruebaNoticias = JSON.stringify(this.noticia)
      },
      err => console.error(err)
    )      
  }

  anterior(){
    if(+this.id <= 1){
      this.verVolver = false
    }else{
      this.verVolver = true
      this.verSiguiente = true
      this.id = this.id - 1 
      this._router.navigate(['/noticia/' + this.id])
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
      if(id == ""){
        this.verSiguiente = false
      }else{
        this.verVolver = true
        this.verSiguiente = true
        this.id = this.id + 1 
        console.log(id)
        this._router.navigate(['/noticia/' + id])
        this._noticiasService.getNoticia(this.id).subscribe(
          res => {
            this.noticia = res
          },
          err => console.error(err)
        )
        this._noticiasService.get4Noticias().subscribe(
          res => {
            this.ultima = res        
            err =>{
              console.log(err)
            }
          }
        )
        
      }
  }
}
