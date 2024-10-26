import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Car{
  id?:string;
  patente:string;
  year:number;
  imagenUrl:String;
  nombre:String;

}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
    private collectionName="cars";
    constructor( private firestore:AngularFirestore) { }


    addCar(car:Car): Promise<void>{
      const id = this.firestore.createId();
      return this.firestore.collection(this.collectionName).doc(id).set({...car,id})
    }
    getCar():Observable<Car[]>{
      return this.firestore.collection<Car>(this.collectionName).valueChanges();

    }
}
