import { Component, OnInit  } from '@angular/core';
import {FormControl, Validators, EmailValidator } from '@angular/forms';
import { ContactForm } from './model/contactForm';
import {SendEmailService} from './service/mail.service';
import { Observable ,  of } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms';
import { Overlay } from '@angular/cdk/overlay';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MatSnackBar, Overlay]
})
export class AppComponent implements OnInit{
  celular: boolean
  

  ContactModel = new ContactForm();
  private emailResponse;
  private truefalse:boolean = false;

  constructor(private sendServices: SendEmailService, public snackBar: MatSnackBar) { }

  ngOnInit(){
    
  }
  onSubmit(f: NgForm){
    this.getSentServices(this.ContactModel, f);
  }
  //metodo de services
  getSentServices(body:ContactForm, f: NgForm){
    this.sendServices.getResponseEmail(body).subscribe(
        data => {
            if(data){
                this.snackBar.open("Gracias por el mensaje", "Correcto", {
                    duration: 2000,
                  });
                  f.reset();
            }
            else{
                this.snackBar.open(":(", "Error", {
                    duration: 2000,
                  });
                  
            }
            
        },
        err => { 
          this.snackBar.open("Algo fallo :/, correo: info@cecr.com.ar", "ups", {
            duration: 5000,
          });
        }
    );    
  }
 

  desplegarLinks(){
    if(this.celular == true){
      this.celular = false
    }else{
      this.celular = true
    }
  }
  
  /* enviarMail(){
    console.log("Nombre: ", this.contacto.nombre," Mail: ", this.contacto.mail," Numero: ", this.contacto.numero)
    window.open('mailto:info@cecr.com.ar' + "?subject=" + "Solicitud de Afiliacion de " + this.contacto.nombre + "&body=" + "Nombre, : " + this.contacto.nombre + ", Correo electronco: " + this.contacto.mail + ", Telefono: " + this.contacto.numero);
  } */

 
}
