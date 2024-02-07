import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuHeaderComponent} from "./layout/menu-header/menu-header.component";
import {FooterComponent} from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-angular1';
}
