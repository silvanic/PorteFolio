import { Component, input, Input } from '@angular/core';

export interface Competence {
  name: string;
  iconUrl?: string;
  libUrl: string;
  taches?: string[];
}

@Component({
  selector: 'app-competences-item',
  standalone: true,
  imports: [],
  templateUrl: './competences-item.component.html',
  styleUrls: ['./competences-item.component.scss'],
})
export class CompetencesItemComponent {
  competence = input.required<Competence>();
}
