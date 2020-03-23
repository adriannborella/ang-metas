import { Injectable } from '@angular/core';
import { Scope } from '../entities/scope.entity';

@Injectable({
  providedIn: 'root'
})
export class ScopesService {

  constructor() { }

  getAll(): Scope[] {
    const result: Scope[] = [];

    result.push(new Scope('Day', 1));
    result.push(new Scope('Week', 7));
    result.push(new Scope('Month', 30));
    result.push(new Scope('Year', 365));
    result.push(new Scope('Life', 999));

    return result;
  }
}
