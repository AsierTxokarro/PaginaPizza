import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {
  buscar = output<string>();

onBuscar(event: Event): void {
  // Leo el texto que hay escrito en el input
  const texto = (event.target as HTMLInputElement).value;

  // Se lo envío al componente padre (App)
  this.buscar.emit(texto);

}
}
