import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bandera=false;

  constructor(public tokenStorage:StorageService){
    this.bandera=this.tokenStorage.getToken()===null ? false:true;
    console.log(this.tokenStorage.getToken());
    console.log(this.bandera);
  }

  ngOnInit(): void {
  }

}
