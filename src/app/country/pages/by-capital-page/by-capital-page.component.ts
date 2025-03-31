import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CoutryService } from '../../services/Coutry.service';
import { CountryMap } from '../../interfaces/mapperCountry.interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { 

  countryServices = inject(CoutryService);
 
// forma 1 - comprovado

  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<CountryMap[]>([])

  // onSearch(query:string){
  //   if(this.isLoading())return

  //   this.isLoading.set(true);
  //   this.isError.set(null);
    
  //   this.countryServices.searchByCapial(query)
  //       .subscribe({
  //         next: (countries) => {
  //            this.isLoading.set(false);
  //            this.countries.set(countries);
  //         },
  //         error:(error)=>{
  //           this.isLoading.set(false);
  //           this.countries.set([]);
  //           this.isError.set(error)
  //         }
         
  //       })
  // }


  // forma dos - esta en fase experimental
  query = signal('')
  countryResource = resource({
    request:() => ({ query: this.query() }),
    loader: async({request} ) => {
      if(!request.query)return[];
      return await firstValueFrom(
        this.countryServices.searchByCapial(request.query)
      );
    },
  });
  

}
