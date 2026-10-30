import { Service, signal } from '@angular/core';

@Service()
export class Buscador {
    textoBusqueda = signal('')
}
