import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { MailService } from './service/mail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  celular: boolean
  contacto = {
    mail:"",
    nombre:"",
    numero:"",
  }

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: MailService) { }

  ngOnInit(){
    this.FormData = this.builder.group({
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required])
    });
  }

  /* onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = '#'
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  } */
 

  desplegarLinks(){
    if(this.celular == true){
      this.celular = false
    }else{
      this.celular = true
    }
  }
  
  enviarMail(){
    console.log("Nombre: ", this.contacto.nombre," Mail: ", this.contacto.mail," Numero: ", this.contacto.numero)
    window.open('mailto:info@cecr.com.ar' + "?subject=" + "Solicitud de Afiliacion de " + this.contacto.nombre + "&body=" + "Nombre, : " + this.contacto.nombre + ", Correo electronco: " + this.contacto.mail + ", Telefono: " + this.contacto.numero);
  }

 
}
