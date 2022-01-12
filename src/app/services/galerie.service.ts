import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  constructor(private httpClient:HttpClient) { }
  getImages(motCle:string, PageActuelle:number, ImagesParPage:number){
    const hits='hits';
    return this.httpClient.get('https://pixabay.com/api/?key=24057460-f40761b18ac2bd3284d0e24b2&q=' + motCle + '&per_page=' + ImagesParPage + '&page=' +PageActuelle);
  }
}
