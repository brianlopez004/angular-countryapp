import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private contriesServices: CountriesService) {}

  searchByRegion(term: string): void {
    this.contriesServices.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
