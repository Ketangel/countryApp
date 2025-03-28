import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CoutryService } from '../../services/Coutry.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { 

  countryServices = inject(CoutryService)

  onSearch(value:string){
    this.countryServices.searchByCapial(value).subscribe( value=> console.log(value) )
    
  }

}
