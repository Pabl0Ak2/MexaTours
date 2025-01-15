import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: boolean = false;  // Cambié el nombre de la propiedad a _isAuthenticated

  constructor() {}

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    // Validación simple de usuario y contraseña
    if (username === 'admin' && password === '1234') {
      this._isAuthenticated = true;
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    this._isAuthenticated = false;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this._isAuthenticated;  // Ahora utilizamos _isAuthenticated
  }
}
