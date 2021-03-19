import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ConexionService } from './conexion.service'
import { Iporder } from '../interfaces/iporder';


@Injectable({
  providedIn: 'root'
})
export class PorderService {


  constructor(private http:HttpClient, private urlBase:ConexionService) { }

  get(corte:string):Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}porders/?pre=${corte}`);
  }

  getLineas():Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}porders`);
  }
}
