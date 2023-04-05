import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  loginData: FormGroup;

  constructor(private _authenticate: AuthenticateService, private router: Router) {
    this.loginData = new FormGroup({ login: new FormControl(), passwd: new FormControl() });
  }

  ngOnInit() {
    this.loginData = new FormGroup({ login: new FormControl(), passwd: new FormControl() });
  }

  authenticateUser(): void {
    var loginValue = this.loginData.value.login;
    var passwdValue = this.loginData.value.passwd;
    this._authenticate.checkAuthenticate(loginValue, passwdValue).subscribe(value => {
      var ok = value.ok;
      if (ok == 1) {
        //this.router.navigate(["users"]);
        console.log("switching");
      }
    });
  }
}
