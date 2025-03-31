import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryMap } from '../../interfaces/mapperCountry.interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {

  countries = input<CountryMap[]>()


}
