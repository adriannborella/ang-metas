import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-nav',
  templateUrl: './goals-nav.component.html',
  styleUrls: ['./goals-nav.component.css']
})
export class GoalsNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut().then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
