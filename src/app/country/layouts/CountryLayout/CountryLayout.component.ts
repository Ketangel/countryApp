import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/topMenu/topMenu.component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './CountryLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayoutComponent { }
