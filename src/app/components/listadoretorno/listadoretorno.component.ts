import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';

import { CompartidoService } from 'src/app/services/compartido.service';
import { ReparacionService } from 'src/app/services/reparacion.service';
import { ReprocesoService } from 'src/app/services/reproceso.service';

@Component({
  selector: 'app-listadoretorno',
  templateUrl: './listadoretorno.component.html',
  styleUrls: ['./listadoretorno.component.css'],
  providers: [MessageService]
})
export class ListadoretornoComponent implements OnInit {

  observacion:string='';
  reprocesoReparadas:any=[];
  reparadasReparadas:any=[];
  //lineas:any=[];

  //selectedCode: number=0;

  marginTop:number=5;

 // validarWash:boolean=false;
  
  constructor(private evento:CompartidoService,private reparacion:ReparacionService,private reproceso:ReprocesoService,private messageService: MessageService) {
    
  }

  ngOnInit(): void {

    this.evento.$idorden.subscribe(val => {

      if (this.evento.porder.corte!='' )
        {   
           this.reproceso.getRetorno(val).subscribe(data => {
            this.reprocesoReparadas = data;
           });

           this.reparacion.getRetorno(val).subscribe(data => {
            this.reparadasReparadas = data;
            });   
        }
        else{
          this.reparadasReparadas=[];
          this.reprocesoReparadas=[];
        }
    });

  }

  retornoReparacion(item:any){

    if (item.objectId!=null && item.objectId!='' && item.objectId<1)
      {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Debe volver a cargar el corte'});
        return;
      }

    if(item.cantidadDevolucion<1 || item.cantidadDevolucion=='' )
      {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'La cantidad ingresada debe ser mayor a 0'});
        return;
      }

    let data = {
      objectId:item.objectId,
      cantidadDevolucion:item.cantidadDevolucion,
      observacion:this.observacion,
      usuario:'usuario',
    }

    this.reparacion.createRetorno(data).subscribe(response => {             
      if (response==="Ok"){ 
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito ingresado correctamente'});
        this.reparacion.getRetorno(this.evento.porder.objectId).subscribe(data => {
           this.reparadasReparadas = data;
        });
    }
      else
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Ha ocurrido un Error'});
  },error=>{console.log(error)});


  }
 
  retornoReproceso(item:any){
 
    if(item.cantidadDevolucion<1 || item.cantidadDevolucion=='' )
    {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'La cantidad ingresada debe ser mayor a 0'});
        return;
    }
    
    let data = {
      objectId:item.objectId,
      cantidadDevolucion:item.cantidadDevolucion,
      observacion:this.observacion,
      usuario:'usuario',
    }


    this.reproceso.createRetorno(data).subscribe(response => {
      if (response==="Ok"){
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito ingresado correctamente'});
        this.reproceso.getRetorno(this.evento.porder.objectId).subscribe(data => {
          this.reprocesoReparadas = data;
       });
      }
      else
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Ha ocurrido un Error'});
    },error =>{ console.log(error) });

  }



  validar(item:any,i:any){
    let unidades=item.totalPorTalla;
    let enviadas=item.cantidadDevolucion;

    if (unidades<enviadas)
        item.cantidadDevolucion=0;
       
  }

  /*selectlinea(){
     this.evento.id=this.selectedCode;
  }
*/

  limpiar0(item:any)
  {
    if(item.cantidadDevolucion==0)
       item.cantidadDevolucion='';
  }

}
