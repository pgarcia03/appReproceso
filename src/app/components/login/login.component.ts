import { Component, OnInit } from '@angular/core';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(public authService:AuthService,public tokenStorage:StorageService ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      console.log(this.tokenStorage.getToken());
    //  this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    let usuario:Iusuario={
        Username:username,
        Password:password
    } 

    this.authService.login(usuario).subscribe(
      data => {
      //  console.log(data);
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(usuario);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
       // this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
