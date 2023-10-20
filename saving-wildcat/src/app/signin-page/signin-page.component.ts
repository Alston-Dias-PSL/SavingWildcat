import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent {

  constructor (private router : Router){ }

  username !: string
  password !: string

  ngOnInit():void{}

  onSignIn(){
    this.router.navigate(['home'])
  }

}
