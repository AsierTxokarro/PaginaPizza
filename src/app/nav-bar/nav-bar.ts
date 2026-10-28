import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {
  // 1. Declaro el output (el "timbre")
buscar = output<string>();

// 2. Método que lee el input y dispara
onBuscar(event: Event): void {
  const texto = (event.target as HTMLInputElement).value; // leer
  this.buscar.emit(texto);                                // disparar
}
}
