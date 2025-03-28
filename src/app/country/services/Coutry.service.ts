import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL ='https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  private http = inject(HttpClient);

  searchByCapial(query:string){
    query = query.toLocaleLowerCase();
    return this.http.get(`${API_URL}/capital/${query}`)
  }

}
