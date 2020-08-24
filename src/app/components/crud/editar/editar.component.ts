import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Global } from '../../../service/global'
import { NoticiasService } from '../../../service/noticias.service'
import { Noticias } from '../../../model/noticias';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [NoticiasService]
})
export class EditarComponent implements OnInit {

  public noticias: any = []

  photoSelected: string | ArrayBuffer;
  file: File;
  id:any;

  noticiaEditada: Noticias = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    created_at: new Date() 
  }
  
  

  constructor(
    private _noticiasService: NoticiasService,
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.id = +this._activateRouter.snapshot.paramMap.get('id')
    console.log(this.id)
    this._noticiasService.getNoticia(this.id).subscribe(
      res => {
        this.noticias = res
      },
      err => console.error(err)
    )
  }

  

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement) {
    this._noticiasService
      .crearNoticia(titulo.value, descripcion.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          location.reload();
        },
        err => console.log(err)
      );
    return false;
  }
  
  cancelar(){
    this._router.navigate(['/crudNoticias/'])
  }

  editNoticia() {
    this.id = +this._activateRouter.snapshot.paramMap.get('id')

    this._noticiasService
      .editarNoticia(this.noticiaEditada.titulo, this.noticiaEditada.descripcion, this.file, this.id)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/crudNoticias'])
        },
        err => console.log(err)
      );    
  }

}
