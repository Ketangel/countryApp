import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryMap } from '../../interfaces/mapperCountry.interfaces';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {

  countries = input<CountryMap[]>()


}
