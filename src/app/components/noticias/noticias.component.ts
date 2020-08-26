import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../service/noticias.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiasService]
})
export class NoticiasComponent implements OnInit {

  noticias: any = []

  constructor(
    private _noticiasService: NoticiasService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._noticiasService.getNoticias().subscribe(
      res => {
        this.noticias = res
        console.log(this.noticias)
        err =>{
          console.log(err)
        }
      }
    )
  }

  noticiaCompleta(id){
    this._router.navigate(['/noticias/' + id]) 
  }

}
