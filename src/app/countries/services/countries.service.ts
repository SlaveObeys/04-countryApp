import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

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

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${country}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

}
