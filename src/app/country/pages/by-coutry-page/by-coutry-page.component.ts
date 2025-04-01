import { ChangeDetectionStrategy, Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CoutryService } from '../../services/Coutry.service';
import { firstValueFrom, of } from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-coutry-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-coutry-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCoutryPageComponent {

  countryServices = inject(CoutryService);
  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)
  queryParam = this.activatedRouter.snapshot.queryParamMap.get('query')??'';
  query = linkedSignal( () => this.queryParam);
  
  // rxResource para observable
  countryResource = resource({
    request:() => ({ query: this.query() }),
    loader: async({request} ) => {
      if(!request.query)return[];

      this.router.navigate(['/country/by-country'],{
       queryParams:{
         query: request.query,
       },
      });

      return await firstValueFrom(
        this.countryServices.searchByCountry(request.query)
      );
    },
  });


}
