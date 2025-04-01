import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryMap } from '../../interfaces/mapperCountry.interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe,RouterLink],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {

  countries = input<CountryMap[]>()
  ismessangerError = input<string | undefined | unknown>()
  isLoading = input<boolean>(false)


}
