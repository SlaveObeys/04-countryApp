import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
    console.log('Countries service initialized');

  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(500),
      )
  }

  // Buscar pais por alpha code
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchCapital(capital: string): Observable<Country[]> {

    const url = `${this.apiURL}/capital/${capital}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(country: string): Observable<Country[]> {

    const url = `${this.apiURL}/name/${country}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(region: string): Observable<Country[]> {

    const url = `${this.apiURL}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
