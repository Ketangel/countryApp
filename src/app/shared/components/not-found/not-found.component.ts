import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent { 


  location = inject(Location); // location no ayuda a navegar por por la app

  goBack(){
    this.location.back(); // back nos ayuda a retroseder caundo fue el ultima navegacion
  }

}
