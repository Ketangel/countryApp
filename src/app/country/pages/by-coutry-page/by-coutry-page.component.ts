import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CoutryService } from '../../services/Coutry.service';
import { firstValueFrom, of } from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-by-coutry-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-coutry-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCoutryPageComponent {

  countryServices = inject(CoutryService);
  query = signal('')
  
  // rxResource para observable
  countryResource = rxResource({
    request:() => ({ query: this.query() }),
    loader: ({request} ) => {

      if(!request.query)return of([]);
      return this.countryServices.searchByCountry(request.query)
    },
  });


}
