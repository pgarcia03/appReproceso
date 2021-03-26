import { Component, OnInit } from '@angular/core';
import { Iporder } from 'src/app/interfaces/iporder';
import { CompartidoService } from 'src/app/services/compartido.service';
import { PorderService } from 'src/app/services/porder.service';

@Component({
  selector: 'app-autocompletado',
  templateUrl: './autocompletado.component.html',
  styleUrls: ['./autocompletado.component.css']
})
export class AutocompletadoComponent implements OnInit {

  
  results:any=[];

  text: string='';

  constructor(private po:PorderService,private seleccion:CompartidoService) { }

  ngOnInit(): void {
  }

  //Metodo de autocompletado
  search(event:any) {
    this.po.get(event.query).subscribe(data => {
        this.results = data;
    });
  }
  
  limpiarData()
  {
    this.results=[];
    this.seleccion.idordenParam(0);
    this.seleccion.porder={
      objectId:0,
      corte:'',
      estilo:'',
      cantidad:0,
      washed:false
    } 

    this.text='';

  }

  corteSeleccionado(event:any) {   
    
    //asignacion datos de po de forma global
    this.seleccion.porder={
      objectId:event.idCorte,
      corte:event.corte,
      estilo:event.estilo,
      cantidad:event.cantidad,
      washed:event.washed
    } 

    //asignacion de id orden al servicio global
    this.seleccion.idordenParam(event.idCorte);
 
  }

}
