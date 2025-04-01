import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent { 

  inpuTitle = input<string>();
  outSearch = output<string>();
  inputValue = signal<string>('');


  debounceEffect = effect( (onCleanup) =>{
    const value = this.inputValue();
    const timeout = setTimeout( () => {
      this.outSearch.emit(value)
    },500);

    onCleanup( () => {
      clearTimeout(timeout)
    }) 

  })

  onSearch(value:string){
    this.outSearch.emit(value)
  }

}
