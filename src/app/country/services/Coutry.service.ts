import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interfaces';
import { catchError, count, delay, map, Observable, throwError } from 'rxjs';
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
        delay(3000), // contador de tiempo
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
        delay(3000), // contador de tiempo
        map( restCounry => CountryMapperFiler.mapRestCountryArrayToCountryArray(restCounry) ),
        catchError ( (error) => {
          return throwError(
            ()=> new Error(`No se encuntra paises con ese nombre ${query}`)
          )
        })
      )
  }

  searchCountryByCode(code:string | null){
    return this.http.get<Country[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        delay(2000),
        map( restCounry => CountryMapperFiler.mapRestCountryArrayToCountryArray(restCounry) ),
        map(countries => countries.at(0)),
        catchError ( (error) => {
          console.log({error})
          return throwError(
            ()=> new Error(`No se encuntra paises con ese codigo ${code}`)
          )
        })
      )
  }

}
