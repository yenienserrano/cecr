import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../service/noticias.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NoticiasService ]
})
export class HomeComponent implements OnInit {

  noticias:any 

  constructor(
    private _noticiasService: NoticiasService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._noticiasService.get4Noticias().subscribe(
      res => {
        this.noticias = res
        console.log(res)
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
