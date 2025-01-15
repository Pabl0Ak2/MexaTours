import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Usamos el servicio de autenticación para validar al usuario
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/destinos']);  // Redirige a destinos si el login es exitoso
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
