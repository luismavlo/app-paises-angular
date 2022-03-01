import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html'
})
export class PaisTableComponent  {

  @Input() paises  : Country[] = []

  constructor() { }

 
}
