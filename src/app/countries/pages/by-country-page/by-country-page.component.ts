import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private contriesServices: CountriesService) {}

  searchByCountry(term: string): void {
    this.contriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
