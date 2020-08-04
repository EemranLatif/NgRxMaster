import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

    constructor(private store : Store<>){

    }


    ngOnInit(){

    }


    onSubmit(username: string, password: string) {
        store.dispatch(login({ username: username, password: password }));
      }



}




