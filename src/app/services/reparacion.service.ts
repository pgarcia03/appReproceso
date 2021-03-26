import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {

  constructor(private http:HttpClient, private urlBase:ConexionService) {   }

  get(id:number):Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReparacion/?idorden=${id}`);
  }

  getRetorno(id:number):Observable<any>{ 
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReparacion/?idorden=${id}&type=retorno`);
  }

  create(data:any):Observable<any>{
    return this.http.post(`${this.urlBase.mainUrl}/EnviosReparacion/`,data);
  }

  createRetorno(data:any):Observable<any>{
    return this.http.post(`${this.urlBase.mainUrl}/EnviosReparacion/?id=${data.objectId}`,data);
  }

/*
  getTotal(corte:string):Observable<any>{

    return  this.http.get(`${this.urlBase.mainUrl}/EnviosReparacion/${corte}`);
  }

  getdesc(id:any,desc:any,corte:any):Observable<any>{
    
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReparacion/${id}&${desc}&${corte}`);
  }

  getAll():Observable<any>{
    return this.http.get(`${this.urlBase.mainUrl}/EnviosReparacion/`);
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${this.urlBase.mainUrl}/EnviosReparacion/${id}`,data);
  }

  delete(id:number,corte:string,inspector:string):Observable<any>{
    //console.log(`${baseUrl}/${id}`);
    return this.http.delete(`${this.urlBase.mainUrl}/EnviosReparacion/${id}&${corte}&${inspector}`);
  }
  */
 
}
