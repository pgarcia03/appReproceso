import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConexionService } from './conexion.service';
import { Iusuario } from '../interfaces/iusuario';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private urlBase:ConexionService) {

  }

  login(usario:Iusuario): Observable<any> {
    return this.http.post(`${this.urlBase.mainUrl}login/authenticate/`, usario);
  }

  register(usuario:Iusuario): Observable<any> {
    return this.http.post(`${this.urlBase.mainUrl}registro`,usuario);
  }

}






