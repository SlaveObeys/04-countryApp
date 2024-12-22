import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }

  searchByRegion(region: Region): void {

    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
