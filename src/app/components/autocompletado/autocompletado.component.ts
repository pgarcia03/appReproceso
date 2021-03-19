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

  search(event:any) {
   
   // console.log();

    this.po.get(event.query).subscribe(data => {
        this.results = data;
       // console.log(data);
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
   // console.log("focus");
    
  }

  corteSeleccionado(event:any) {   
    
    this.seleccion.porder={
      objectId:event.idCorte,
      corte:event.corte,
      estilo:event.estilo,
      cantidad:event.cantidad,
      washed:event.washed
    } 

    this.seleccion.idordenParam(event.idCorte);
  
    console.log("Select");
  }

}
