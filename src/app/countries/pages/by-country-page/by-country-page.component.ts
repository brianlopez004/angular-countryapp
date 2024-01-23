import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private contriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.contriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.contriesServices.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.contriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
