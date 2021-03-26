import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iporder } from '../interfaces/iporder';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {


  porder:Iporder={
    objectId:0,
    corte:'',
    estilo:'',
    cantidad:0,
    washed:false
   };

  id:number=0; 

  tipoTransaccion:string='';
  tipo:string='';
  
  //usado para persibir un nuevo id orden, este sera enviado como parametro para extarer lista de unidades en componente listado
  private idorden = new Subject<number>();
  public $idorden = this.idorden.asObservable();
  //******************//
  constructor() {

  }

  idordenParam(val: number){
    this.idorden.next(val);   
  }
  

}
