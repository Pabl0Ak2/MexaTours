import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DestinosComponent } from './destinos/destinos.component';
import { AsientosComponent } from './asientos/asientos.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },  // Ruta pública para el login
    { path: 'destinos', component: DestinosComponent, canActivate: [AuthGuard] },  // Ruta protegida
    { path: 'asientos', component: AsientosComponent, canActivate: [AuthGuard] }  // Ruta protegida
  ];
