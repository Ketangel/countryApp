import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMap } from '../interfaces/mapperCountry.interfaces';
import { CountryMapperFiler } from '../mapper/countri.mapperFilt';

const API_URL ='https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  private http = inject(HttpClient);

  searchByCapial(query:string):Observable<CountryMap[]>{
    query = query.toLocaleLowerCase();
    return this.http.get<Country[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map( restCounry => CountryMapperFiler.mapRestCountryArrayToCountryArray(restCounry) ),
        catchError ( (error) => {
          return throwError(
            ()=> new Error(`No se puedo obtener paises con esa capital ${query}`)
          )
        })
      )
  }


  searchByCountry(query:string):Observable<CountryMap[]>{
    query = query.toLocaleLowerCase();
    return this.http.get<Country[]>(`${API_URL}/name/${query}`)
      .pipe(
        map( restCounry => CountryMapperFiler.mapRestCountryArrayToCountryArray(restCounry) ),
        catchError ( (error) => {
          return throwError(
            ()=> new Error(`No se encuntra paises con ese nombre ${query}`)
          )
        })
      )
  }

}
