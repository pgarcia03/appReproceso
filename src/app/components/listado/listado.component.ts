import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';

import { CompartidoService } from 'src/app/services/compartido.service';
import { PorderService } from 'src/app/services/porder.service';
import { ReparacionService } from 'src/app/services/reparacion.service';
import { ReprocesoService } from 'src/app/services/reproceso.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [MessageService]
})

export class ListadoComponent implements OnInit {

  observacion:string='';
  reparaciones:any=[];
  lineas:any=[];

  selectedCode: number=0;

  marginTop:number=5;

  validarWash:boolean=false;

  constructor(private evento:CompartidoService,private reparacion:ReparacionService,private reproceso:ReprocesoService,private po:PorderService,private messageService: MessageService) {
    this.cargarLinea();
  }

  ngOnInit(): void {

    this.evento.$idorden.subscribe(val => {

      if (this.evento.porder.corte!='' )
        {   
            this.validarWash=this.evento.porder.washed;

            switch (this.validarWash) {
                case true:
                    this.reproceso.get(val).subscribe(data => {
                       this.reparaciones = data;
                    });                
                  break;
                case false:
                    this.reparacion.get(val).subscribe(data => {
                        this.reparaciones = data;
                    });
                  break;
                default:
                  console.log('Ha Ocurrido un error'); 
                break;
             }         
        }
        else{
          this.reparaciones=[];
        }
    });

  }

  cargarLinea()
  {
    this.po.getLineas().subscribe(data => {
      this.lineas = data;
    });
  }

  Enviar(item:any){
    
    if (!this.evento.porder.objectId){
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Debe volver a cargar el corte'});
        return;
    }

    if (this.evento.tipoTransaccion===''){
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Debe Seleccionar donde enviara la unidades'});
      return;
  }
    console.log(this.validarWash);

    this.validarWash=this.evento.tipoTransaccion==="Reproceso"?true:false;
    
    console.log(this.evento.tipoTransaccion);
    console.log(this.selectedCode);
    console.log(this.evento.id);


    if (this.validarWash===true && this.evento.porder.washed==false)
    {
      this.messageService.add({severity:'error', summary:'Service Message', detail:'No puede enviar a Reproceso un corte no lavado'});
      return;
    } 

    if (this.validarWash===false && this.selectedCode<1)
        {
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Debe Seleccionar linea'});
          return;
        } 
       
    let data = {
      idOrder:this.evento.porder.objectId,
      talla:item.talla,
      totalPorTalla:item.totalPorTalla,
      cantidadDevolucion:item.cantidadDevolucion,
      observacion:this.observacion,
      usuario:'usuario',
      idLinea:0
    }

    switch (this.validarWash) {
      case true:   // ira al area de lavado Intex
                
          this.reproceso.create(data).subscribe(response => {
            if (response==="Ok"){
              this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito ingresado correctamente'});
          
             switch (this.evento.porder.washed) {
                 case true:
                     this.reproceso.get(this.evento.porder.objectId).subscribe(data => {
                        this.reparaciones = data;
                     });                
                   break;
                 case false:
                     this.reparacion.get(this.evento.porder.objectId).subscribe(data => {
                         this.reparaciones = data;
                     });
                   break;
                 default:
                   console.log('Ha Ocurrido un error'); 
                 break;
              }    

            }
            else
              this.messageService.add({severity:'error', summary:'Service Message', detail:'Ha ocurrido un Error'});
          },error =>{ console.log(error) });
        break;
      case false:  // ira a plantas de Confeccion
          data.idLinea=this.evento.id;
          this.reparacion.create(data).subscribe(response => {             
              if (response==="Ok"){ 
                this.messageService.add({severity:'success', summary:'Service Message', detail:'Exito ingresado correctamente'});
           
                switch (this.evento.porder.washed) {
                  case true:
                      this.reproceso.get(this.evento.porder.objectId).subscribe(data => {
                         this.reparaciones = data;
                      });                
                    break;
                  case false:
                      this.reparacion.get(this.evento.porder.objectId).subscribe(data => {
                          this.reparaciones = data;
                      });
                    break;
                  default:
                    console.log('Ha Ocurrido un error'); 
                  break;
               }    
 

            }
              else
              this.messageService.add({severity:'error', summary:'Service Message', detail:'Ha ocurrido un Error'});
          });
        break;
      default:
        console.log('Ha Ocurrido un error'); 
      break;
   }    
  
  }

  validar(item:any,i:any){
    let unidades=item.totalPorTalla;
    let enviadas=item.cantidadDevolucion;

    if (unidades<enviadas)
        item.cantidadDevolucion=0;
       
  }

  selectlinea(){
     this.evento.id=this.selectedCode;
  }

  limpiar0(item:any)
  {
  
    if(item.cantidadDevolucion==0)
       item.cantidadDevolucion='';

  }


}
