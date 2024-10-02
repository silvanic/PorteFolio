import { Component } from '@angular/core';
import {
  Competence,
  CompetencesItemComponent,
} from '../competences-item/competences-item.component';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';

export interface Competences {
  techName: string;
  iconUrl: string;
  libs: Competence[];
}

@Component({
  selector: 'app-competences-liste',
  standalone: true,
  imports: [CompetencesItemComponent, CardModule],
  templateUrl: './competences-liste.component.html',
  styleUrl: './competences-liste.component.scss',
})
export class CompetencesListeComponent {
  competences: Competences[] = [
    {
      techName: 'Node',
      iconUrl: 'assets/icons/node/node.png',
      libs: [
        {
          name: 'Angular',
          iconUrl: 'assets/icons/node/angular.jpg',
          libUrl: 'https://angular.dev/',
          taches: [],
        },
        {
          name: 'React',
          iconUrl: 'assets/icons/node/react.svg',
          libUrl: 'https://fr.react.dev/',
          taches: [],
        },
        {
          name: 'Vue',
          iconUrl: 'assets/icons/node/vue.png',
          libUrl: 'https://vuejs.org/',
          taches: [],
        },
        {
          name: 'Next',
          iconUrl: 'assets/icons/node/next.png',
          libUrl: 'https://nextjs.org/',
          taches: [],
        },
        {
          name: 'Nuxt',
          iconUrl: 'assets/icons/node/nuxt.png',
          libUrl: 'https://nuxt.com/',
          taches: [],
        },
        {
          name: 'jQuery',
          iconUrl: 'assets/icons/node/jquery.png',
          libUrl: 'https://jquery.com/',
          taches: [],
        },
        {
          name: 'NestJS',
          iconUrl: 'assets/icons/node/nestjs.svg',
          libUrl: 'https://github.com/nestjs/nest',
          taches: [],
        },
        {
          name: 'Express',
          iconUrl: 'assets/icons/node/express.png',
          libUrl: 'https://github.com/expressjs/express',
          taches: [],
        },
        {
          name: 'Highcharts',
          iconUrl: 'assets/icons/node/highchart.png',
          libUrl: 'https://www.highcharts.com/',
          taches: [],
        },
        {
          name: 'Aedes',
          libUrl: 'https://github.com/moscajs/aedes',
          taches: [],
        },
      ],
    },
    {
      techName: 'Java',
      iconUrl: 'assets/icons/java/java.png',
      libs: [
        {
          name: 'Spring',
          iconUrl: 'assets/icons/java/spring.png',
          libUrl: 'https://spring.io/',
          taches: [],
        },
        {
          name: 'Maven',
          iconUrl: 'assets/icons/java/maven.png',
          libUrl: 'https://maven.apache.org/',
          taches: [],
        },
        {
          name: 'Hibernate',
          iconUrl: 'assets/icons/java/hibernate.png',
          libUrl: 'https://hibernate.org/',
          taches: [],
        },
        {
          name: 'JUnit',
          iconUrl: 'assets/icons/java/junit.png',
          libUrl: 'https://junit.org/',
          taches: [],
        },
        {
          name: 'Struts',
          iconUrl: 'assets/icons/java/struts.png',
          libUrl: 'https://struts.apache.org/',
          taches: [],
        },
      ],
    },
  ];
}
