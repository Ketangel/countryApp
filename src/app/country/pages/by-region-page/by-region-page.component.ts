import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/region.interfaces';
import { firstValueFrom } from 'rxjs';
import { CoutryService } from '../../services/Coutry.service';

@Component({
  selector: 'app-by-region-page',
  imports: [ CountryListComponent],
  templateUrl: './by-region-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent {

  countryServices = inject(CoutryService)

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];


  query = signal('')
  countryResource = resource({
    request:() => ({ query: this.query() }),
    loader: async({request} ) => {
      if(!request.query)return[];
      return await firstValueFrom(
        this.countryServices.searchCountryByRegion(request.query)
      );
    },
  });
  
}
