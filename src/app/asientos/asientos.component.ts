import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asientos.component.html',
  styleUrl: './asientos.component.css'
})
export class AsientosComponent implements OnInit {
  destinoId: number = 0;
  asientosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.destinoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  // Método para mostrar la alerta cuando se selecciona un asiento
  reservarAsiento(asiento: number): void {
    alert(`Has reservado el asiento ${asiento}`);
  }
}
