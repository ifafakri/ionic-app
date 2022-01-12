import { Injectable } from '@angular/core';
import {Endroit} from '../model/endroit.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class EndroitsService {
  public currentLocation: Endroit;
  private locations: Array<Endroit> = [];
  constructor(private str:Storage) { 
   this.locations.push({title: 'A'});
   this.locations.push({title: 'B'});
   this.locations.push({title: 'C'});
   //create sert à créer la base
   this.str.create();
  // set permet d'ajouter un attribut au storage
  this.str.set('locations', this.locations);
  }
  public getLocations() {
    return this.str.get('locations').then(data => {
      this.locations = data != null ? data : []; // opérateur ternaire
      return this.locations.slice();
     });
   }
   public addLocation(endroit: Endroit) {
    this.locations.push(endroit);
    this.str.set('locations', this.locations);
  }
  public updateLocations(locations) {
    this.str.set('locations', locations);
    this.locations = locations;
    }
    addPhoto(base64Image: string, timestamp: number) {
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.locations.length ; i++) {
       if (this.locations[i].timestamp === timestamp){
       this.locations[i].photos.push(base64Image);
       this.updateLocations(this.locations);
       break;
       }
      }}
}
