import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';
import {Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myData: any;

  constructor(private route:Router, private userService: UserServiceService) {
  }

  ngOnInit(): void{
    this.afficher();
  }

  formData = {
    email: '',
    password:''
  }

  afficher() {
    this.userService.userData().subscribe((data) => {
      this.myData = data;
      console.log(this.myData)
    });
  }


  submitFunction(event: Event):void {
    event.preventDefault();
    if (this.formData.email != "" && this.formData.password == "passer") {
      let email = this.formData.email;
      let password = this.formData.password;
      // @ts-ignore
      let userFound = this.myData.find(usersdata => usersdata.email === this.formData.email);
      if (userFound) {
        // console.log("le user a ete trouve")
        this.affichermessage('success', "bienvenu", '')
        this.route.navigate(['/accueil']);
      }else {
        console.log("user pas trouver")
      }

    } else {
      this.affichermessage('error','Email ou password incorrect','')
    }

  }

  affichermessage(icone: any, message: string,user:string) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: message +"" +user,
        showConfirmButton: true,
        // timer: 1500
    })
  }
}
