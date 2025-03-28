import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-coutry-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-coutry-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCoutryPageComponent {
onSearch($event: string) {
throw new Error('Method not implemented.');
}

}
