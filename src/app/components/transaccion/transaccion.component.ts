import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  
  operacion:string='';

  tipo:string='';
  
  constructor(private evento:CompartidoService) { }

  ngOnInit(): void {
  }

  
  selected()
  {
    
    this.evento.tipoTransaccion=this.operacion; //? true : false;
    this.tipo=this.operacion;
   // console.log(this.operacion);
  }

}
