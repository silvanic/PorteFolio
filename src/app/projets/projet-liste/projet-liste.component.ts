import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProjetItemComponent } from '../projet-item/projet-item.component';
import { DividerModule } from 'primeng/divider';

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
  imports: [CardModule, ProjetItemComponent, DividerModule],
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
      simplifié. Une seconde version est en cours de développement en remplacant Angular Material par PrimeNG afin d'améliorer
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
      img: 'assets/img/planning-poking.jpg',
    },
    {
      name: 'POC Highchart Angular',
      descripition: `Ce POC a été développé pour évaluer la faisabilité de déplacer plusieurs points sur un graphe, soit en les sélectionnant individuellement, à un index spécifique, ou au sein d'une zone de travail définie.`,
      link: 'https://github.com/silvanic/Highchart_Angular_Playground',
      stack: ['Angular', 'Highchart', 'Typescript'],
      img: 'assets/img/highchart_angular.png',
    },
  ];
}
