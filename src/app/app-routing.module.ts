import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ReprocesoComponent } from './components/reproceso/reproceso.component'
import { RetornoComponent } from './components/retorno/retorno.component'

//const routes: Routes = [];

//definir rutas mapear componentes agragados
const routes: Routes = [
  {path:'',redirectTo:'Devolucion',pathMatch:'full'},
//  {path:'',component:AppComponent},
  {path:'Devolucion',component:ReprocesoComponent},
  {path:'Retorno',component:RetornoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
