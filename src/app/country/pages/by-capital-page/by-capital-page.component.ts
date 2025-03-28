import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CoutryService } from '../../services/Coutry.service';
import { CountryMap } from '../../interfaces/mapperCountry.interfaces';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { 

  countryServices = inject(CoutryService);

  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<CountryMap[]>([])

  onSearch(query:string){
    if(this.isLoading())return

    this.isLoading.set(true);
    this.isError.set(null);
    
    this.countryServices.searchByCapial(query)
        .subscribe( (countries)=> {
          this.isLoading.set(false);
          this.countries.set(countries);
        })
    
  }

}
