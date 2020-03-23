import { Injectable } from '@angular/core';
import { UsaurioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyARZCSyk_bKr-Efo3feFvdBPiZ40emuMag';

  constructor(private http: HttpClient) { }

  registerUser(user: UsaurioModel) {
    return this.postFirebase(user, 'signUp');
  }

  login(user: UsaurioModel){
    return this.postFirebase(user, 'signInWithPassword');
  }

  logOut() {
  }

  private postFirebase(user: UsaurioModel, method: string) {
    const authData = {
      ...user,
      returnSecureToken: true
    };

    const url = this.url + method + '?key=' + this.apiKey;

    return this.http.post(url, authData);
  }
}
