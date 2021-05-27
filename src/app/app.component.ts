import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appReproceso';

  bandera=false;

  constructor(public tokenStorage:StorageService){
    this.bandera=this.tokenStorage.getToken()===null ? false:true;
    console.log(this.tokenStorage.getToken());
    console.log(this.bandera);
  }


}
