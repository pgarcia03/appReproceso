import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  bandera=false;

  constructor(private tokenStorage: StorageService) {
    this.bandera=this.tokenStorage.getToken()===null ? false:true;
    console.log(this.tokenStorage.getToken());
    console.log(this.bandera);
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }

  cerrar(){
    console.log("cerrando");
    
    this.tokenStorage.signOut();

    this.bandera=this.tokenStorage.getToken()===null ? false:true;
    console.log(this.tokenStorage.getToken());
    console.log(this.bandera);

    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
