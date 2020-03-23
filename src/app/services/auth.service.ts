import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';
import { UserEntity } from '../entities/user.entity';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string;
  loading: boolean;

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    this.loading = true;
    this.readToken();

    this.afAuth.authState.subscribe(user => {
      this.loading = false;

      if (user) {
        user.getIdToken().then(token => {
          this.saveToken(token);
        });
      }
    });
  }

  isLoged() {
    return this.userToken.length > 2;
  }

  saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  mailRegister(user: UserEntity) {
    return this.postFirebase(user, 'signUp');
  }

  mailLogin(user: UserEntity){
    return this.postFirebase(user, 'signInWithPassword');
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithRedirect(provider);
  }

  logOut() {
    firebase.auth().signOut().then(() => {
      localStorage.setItem('token', '');
    },
    (err) => {
      console.log(err);
    });
  }

  private postFirebase(user: UserEntity, method: string) {
    const authData = {
      ...user,
      returnSecureToken: true
    };

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:' + method + '?key=' + environment.firebase.apiKey;

    return this.http.post(url, authData).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }
}
