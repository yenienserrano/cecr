import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router'

import { Global } from '../../service/global'
import { NoticiasService } from '../../service/noticias.service'
import { Noticias } from 'src/app/model/noticias';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [NoticiasService]
})
export class CrudComponent implements OnInit {

  public noticias: any = []

  photoSelected: string | ArrayBuffer;
  file: File;
  

  newNoticia: Noticias = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    created_at: new Date() 
  }
  id: any;

  constructor(
    private _noticiasService: NoticiasService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._noticiasService.getNoticias().subscribe(
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

  noticiaEditar(id){
    this._router.navigate(['/crudNoticias/' + id]) 
  }

  borrarNoticia(id){
    this._noticiasService.borrarNoticia(id).subscribe(
      res => {
        console.log("Noticia de id " + id + " fue borrada"),        
        location.reload();
      } ,
      err => console.log(err)
    )
  }  

}
