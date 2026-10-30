import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-pedido',
  imports: [ReactiveFormsModule],
  styleUrl: './formulario-pedido.css',
  templateUrl: './formulario-pedido.html',
})
export class FormularioPedido {

  horaEntre(min: string, max: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valor = control.value;
      if (!valor) return null;
      return valor >= min && valor <= max
        ? null
        : { horaFueraDeRango: { min, max } };
    };
  }

  contactForm = new FormGroup({
    horaEntrega: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, this.horaEntre('09:00', '23:00')],
    }),
    direccion: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    metodoPago: new FormControl<'tarjeta' | 'bizum'>('tarjeta', {
      nonNullable: true,
      validators: Validators.required,
    }),
    tarjeta: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{16}$/)],
    }),
    movil: new FormControl(
      { value: '', disabled: true },
      {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d{9}$/)],
      }
    ),
  });   // <-- aquí termina el FormGroup

  FormularioPedido() {
  this.contactForm.controls.metodoPago.valueChanges
    .pipe(takeUntilDestroyed())
    .subscribe((metodo) => {
      const { tarjeta, movil } = this.contactForm.controls;

      if (metodo === 'tarjeta') {
        tarjeta.enable();
        movil.disable();
        movil.reset();
      } else {
        movil.enable();
        tarjeta.disable();
        tarjeta.reset();
      }
    });
}

  onSubmit() {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }
  console.log(this.contactForm.value);
}
}