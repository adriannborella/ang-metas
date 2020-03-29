import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import { UserEntity } from '../entities/user.entity';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;
  userToken: string;
  init: Observable<boolean>;

  constructor(private http: HttpClient, public afAuth: AngularFireAuth, private router: Router) {
    this.user = null;
    this.afAuth.authState.subscribe(user => {
      this.user = user;

      if (user) {
        this.router.navigateByUrl('/goals');
      } else {
        this.router.navigateByUrl('/auth');
      }
    });

    this.afAuth.idToken.subscribe(token => {
      this.userToken = token;
    });
  }

  async isLoged() {
    let token = null;

    if (this.user !== null) {
      token = await this.user.getIdToken();
    }

    return token !== null;
  }

  async mailRegister(user: UserEntity) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    return result;
  }

  async mailLogin(user: UserEntity) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    return result;
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithRedirect(provider);
  }

  async logOut() {
    await firebase.auth().signOut();
  }
}

