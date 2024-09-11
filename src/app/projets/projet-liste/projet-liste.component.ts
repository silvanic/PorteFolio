import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProjetItemComponent } from '../projet-item/projet-item.component';

export interface IProjet {
  name: string;
  descripition: string;
  link: string;
  stack: string[];
  img?: string;
}

@Component({
  selector: 'app-projet-liste',
  standalone: true,
  imports: [CardModule, ProjetItemComponent],
  templateUrl: './projet-liste.component.html',
  styleUrl: './projet-liste.component.scss',
})
export class ProjetListeComponent {
  projets: IProjet[] = [
    {
      name: 'Planning Poking',
      descripition: `Un simple Planning Poker où l'on peut personnaliser la valeur 
      des cartes, partager un lien pour rejoindre la salle, mettre à jour la 
      configuration de la salle en temps réel. Largement inspiré d'autres Planning Poker mais 
      simplifié. Une seconde version est en cours de développement en remplacant Angular Material afin d'améliorer
      l'interface`,
      link: 'https://planning-poking.deno.dev/',
      stack: [
        'Deno',
        'WebSocket',
        'Oak',
        'Angular',
        'Angular Material',
        'PrimeNG',
      ],
      img: 'assets/img/planning-poking.png',
    },
  ];
}
