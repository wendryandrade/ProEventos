import { Component } from '@angular/core';
import { EventosComponent } from "./components/eventos/eventos.component";
import { PalestrantesComponent } from "./components/palestrantes/palestrantes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProEventos-App';
}
