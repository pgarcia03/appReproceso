import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class ReprocesoService  {

  constructor(private http:HttpClient, private urlBase:ConexionService) {   }
/*
  getAll():Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReproceso/`);
  }
*/

  /*
  getTotal(corte:string):Observable<any>{
    return  this.http.get(`${this.urlBase.mainUrl}/EnviosReproceso/${corte}`);
  }
*/

  get(id:number):Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}EnviosReproceso/?idorden=${id}`);
  }

  getRetorno(id:number):Observable<any>{ 
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReproceso/?idorden=${id}&type=retorno`);
  }

  create(data:any):Observable<any>{
    return this.http.post(`${this.urlBase.mainUrl}/EnviosReproceso/`,data);
  }

  createRetorno(data:any):Observable<any>{
    return this.http.post(`${this.urlBase.mainUrl}/EnviosReproceso/?id=${data.objectId}`,data);
  }


  /*
  update(id:any,data:any):Observable<any>{
    return this.http.put(`${this.urlBase.mainUrl}/EnviosReproceso/${id}`,data);
  }

  delete(id:number,corte:string,inspector:string):Observable<any>{
   
    return this.http.delete(`${this.urlBase.mainUrl}/EnviosReproceso/${id}&${corte}&${inspector}`);
  }

  */
}
