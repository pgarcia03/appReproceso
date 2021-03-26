import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { AutocompletadoComponent } from './components/autocompletado/autocompletado.component';
import { MenuComponent } from './components/menu/menu.component';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { ReprocesoComponent } from './components/reproceso/reproceso.component';
import { ListadoComponent } from './components/listado/listado.component';
import { RetornoComponent } from './components/retorno/retorno.component';
import { ListadoretornoComponent } from './components/listadoretorno/listadoretorno.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { ListaretornoreparacionComponent } from './components/listaretornoreparacion/listaretornoreparacion.component';
import { ListaretornoreprocesoComponent } from './components/listaretornoreproceso/listaretornoreproceso.component';
import { LoginComponent } from './components/login/login.component';

import { authInterceptorProviders } from './helper/auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    AutocompletadoComponent,
    MenuComponent,
    ReparacionComponent,
    ReprocesoComponent,
    ListadoComponent,
    RetornoComponent,
    ListadoretornoComponent,
    TransaccionComponent,
    ListaretornoreparacionComponent,
    ListaretornoreprocesoComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AutoCompleteModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule,
    RadioButtonModule,
    MessageModule,
    MessagesModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
