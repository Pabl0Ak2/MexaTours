import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  destinos = [
    { nombre: 'Ciudad de México', id: 1 },
    { nombre: 'Guadalajara', id: 2 },
    { nombre: 'Monterrey', id: 3 },
  ];
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();  // Cierra la sesión
    this.router.navigate(['/']);  // Redirige al login
  }
}
