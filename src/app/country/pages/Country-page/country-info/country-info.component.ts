import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CountryMap } from '../../../interfaces/mapperCountry.interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent { 


  country = input.required<CountryMap>()

  currentYear = computed(() => {
    return new Date().getFullYear();
  });

}
