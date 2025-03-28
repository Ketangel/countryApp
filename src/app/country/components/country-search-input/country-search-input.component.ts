import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent { 

  inpuTitle = input<string>();
  outSearch = output<string>();

  onSearch(value:string){
    this.outSearch.emit(value)
  }

}
