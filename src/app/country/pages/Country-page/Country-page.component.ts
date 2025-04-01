import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CoutryService } from '../../services/Coutry.service';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { CountryInfoComponent } from "./country-info/country-info.component";

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInfoComponent],
  templateUrl: './Country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent { 
  countryServices = inject(CoutryService)
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');

  countryResorce = rxResource({
    request: () => ({code: this.countryCode}),
    loader: ({request}) => {
      return this.countryServices.searchCountryByCode(request.code)
    },
  })

}
