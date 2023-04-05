import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _serverURL = 'http://localhost:8000';

  constructor(private _httpClient : HttpClient) { }

  checkAuthenticate(login: string, password: string): Observable<any> {
    var theObject = {"login" : login, "password": password};
    return this._httpClient.post(this._serverURL+"/authenticate", theObject);
  }
}
