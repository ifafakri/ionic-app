import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  constructor(private httpClient: HttpClient) {
   }
  getMeteo1jour(ville: string) {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=cf3ec7498c6d645d19eee7a2cb9f0db6')
    }

  getMeteo5jours(ville: string) {
      return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q=' + ville + '&appid=cf3ec7498c6d645d19eee7a2cb9f0db6')
      }
}
