import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  destinos = [
    { nombre: 'Ciudad de México', id: 1 },
    { nombre: 'Guadalajara', id: 2 },
    { nombre: 'Monterrey', id: 3 },
  ];
  estados = ['Jalisco', 'CDMX', 'Nuevo León', 'Querétaro'];
  estadoActual: string = '';
  estadoDestino: string = '';
  tipoAutobus: string = '';
  mensaje: string = '';
  mostrarModal: boolean = false;
  fechaSalida: string = '';
  fechaRegreso: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  // Función para guardar y mostrar el modal
  guardarDestino(): void {
    if (this.estadoActual && this.estadoDestino && this.tipoAutobus && this.fechaSalida && this.fechaRegreso) {
      this.mensaje = 'Selección guardada con éxito';
      this.mostrarModal = true; // Mostrar el modal
    } else {
      this.mensaje = 'Por favor, completa todos los campos.';
    }
  }

  // Función para cerrar el modal
  cerrarModal(): void {
    this.mostrarModal = false;
  }

  logout(): void {
    this.authService.logout();  // Cierra la sesión
    this.router.navigate(['/']);
  }

  continuar() {
    this.router.navigate(['/asientos']);
  }
}
