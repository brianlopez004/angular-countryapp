import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private contriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.contriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.contriesServices.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;

    this.contriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
