import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterPageComponent } from "./shared/components/footer-page/footer-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';
}
