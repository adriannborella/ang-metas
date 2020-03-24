import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Goal } from '../entities/goal.entity';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private fireStore: AngularFirestore) { }

  add(goal: Goal): Promise<DocumentReference> {
    return this.fireStore.collection('goals').add({...goal});
  }
}
