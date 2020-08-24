  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../model/contacto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailApi = 'https://mailthis.to/info@cecr.com.ar'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

}