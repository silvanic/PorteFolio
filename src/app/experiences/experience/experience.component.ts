import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';

export interface Event {
  title: string;
  date: string;
}
export interface Experience {
  title: string;
  missions: Mission[];
}
export interface Mission {
  header?: string;
  poste: string;
  organisation: string;
  mission: string;
  activites: string[];
  resultat: string;
  environnement: string[];
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    AccordionModule,
    CardModule,
    PanelModule,
    ChipModule,
    ExperienceItemComponent,
    TimelineModule,
    DividerModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  formationsCertifications: Event[] = [
    {
      title:
        'Licence Sciences, Technologies, Santé Mention Informatique Générale en alternance, Lycée Jean Rostand (CNAM)',
      date: '06/2015',
    },
    {
      title: 'BULATS B2',
      date: '06/2015',
    },
    {
      title: 'BTS SIO',
      date: '06/2014',
    },
  ];

  experiences: Experience[] = [
    {
      title: 'Open (mars 2018 à ce jour)',
      missions: [
        {
          header: "De mars 2024 à juillet 2024, pour l'ANF",
          poste: 'Développeur Front',
          organisation:
            "Equipe d'une dizaine de personnes dont 5 développeurs. En mode agile, avec des sprints de 3 semaines accompagné de Sprint Planning Meeting, Rétro et cadrage.",
          mission:
            "Développement d'une nouvelle application pour la gestion de sites administratifs en utilisant des outils géographiques pour l'Administration de la nature et des forêts du Luxembourg, avec un calendrier strict imposé par la nécessité d'un MVP défini par le client.",
          activites: [
            'Fiabiliser le RAF (Restant à Faire )',
            'Identifier et anticiper les impacts',
            'Apporter des correctifs',
            'Assurer la qualité du code',
            'Respecter les maquettes',
          ],
          resultat:
            "Evolution d'une application Angular utilisant des outils de cartographie tel que OpenLayer et GeoServer afin de référencer des sites de gestion",
          environnement: [
            'Angular 11',
            'Typescript',
            'OpenLayers 5',
            'GeoServer',
            'PrimeNG',
            '.Net',
            'Jira',
            'PostgreSQL',
          ],
        },
        {
          header: 'De septembre 2023 à février 2024, pour le CNC',
          poste: 'Développeur Front',
          organisation:
            "Equipe d'une vingtaine de personnes dont 10 développeurs. En mode agile, avec des sprints de 3/4 semaines accompagné de Sprint Planning Meeting, Rétro et cadrage.",
          mission:
            "Renforcer l'équipe front pour soutenir le développement de l'application MesAides pour la gestion des aides avec un calendrier défini par le client",
          activites: [
            'Améliorer la qualité du développement en respectant les normes appliqués',
            'Identifier et anticiper les impacts des divers développements',
            'Apporter des correctifs pour stabiliser les différents composants',
            'Respecter les maquettes pour garantir la conformité aux attentes du client',
          ],
          resultat:
            "Evolution et stabilisation d'applications existantes pour la gestion de création de nouveaux projets",
          environnement: [
            'React',
            'Flux',
            '.Net',
            'Jira',
            'Git',
            'Microsoft Server SQL',
          ],
        },
        {
          header: 'De décembre 2021 à septembre 2023, pour ANCV',
          poste: 'Développeur Front',
          organisation:
            "Équipe d'une quinzaine de personnes, répartie sur trois sites (Rennes, Lannion et Paris).  Travail en mode agile avec des sprints de 3/4 semaines, incluant Sprint Planning,  rétrospectives et cadrage.",
          mission:
            'Développement d’une nouvelle application pour la Direction des Politiques Sociales de l’ANCV, permettant une gestion efficace des projets sociaux,  dans un planning contraint par la nécessité de livrer un MVP aligné avec les prioritésdu client.',
          activites: [
            'Proposer des solutions viables et maintenables',
            'Identifier et anticiper les impacts des évolutions et corrections',
            'Respecter le Design System en suivant les guidelines fournies et en utilisant des composants réutilisables',
            "Alerter en cas de complexité supérieur à l'attendu",
            'Appliquer des correctifs si nécessaire',
            "Assurer la qualité des relectures à l'aide d'outils d'intégration continue avec Sonar",
            'Accompagner les nouveaux arrivants sur le projet',
          ],
          resultat:
            "Mise en place d'une application à l'aide de NextJS et SpringBoot pour la gestion de projets en respecant un design system",
          environnement: [
            'Next',
            'React',
            'MUI',
            'Redux',
            'React Hook Form',
            'Storybook',
            'Sprint Boot',
            'Java 17',
            'PostgreSQL',
          ],
        },
        {
          header: 'De août 2021 à octobre 2021, pour ANTAI',
          poste: 'Développeur Back',
          organisation: "Equipe d'une dizaine de personnes. En mode agile",
          mission:
            'Evolution d’une application existante sur le périmètre ANTAI.',
          activites: [
            'Garantir de la bonne qualité des développements',
            'Respecter les bonnes pratiques',
            'Corriger des anomalies front et back',
          ],
          resultat:
            "Mise en place de WebService permettant d'améliorer le parcours Numérique de l'ANTAI",
          environnement: [
            'Angular',
            'Sprint Boot',
            'Java',
            'API REST',
            'Jira',
            'Git',
            'MySQL',
          ],
        },
        {
          header: 'De décembre 2020 à juillet 2021, pour CNC',
          poste: 'Développeur Fullstack',
          organisation:
            "Equipe d'une vingtaine de personnes (développeurs, fonctionels, testeurs...). En mode agile",
          mission:
            'Développement et maintien de multiples applications (web, serveur, rapports SSRS, ETL)',
          activites: [
            "Conception d'application SSIS",
            'Mise à jour de rapport SSRS',
            'Développer des API et batch',
            "Correction d'anomalies front et back",
            'Rédaction de documentation pour PowerBI',
          ],
          resultat:
            "Développement d'une application SSIS permettant de faciliter la compréhension de l'utilisation des différentes tables existantes, afin d'y appliquer diverses statistiques.",
          environnement: [
            'ETL',
            'SSIS',
            'SSRS',
            'C#',
            'API REST',
            'React',
            'Microsoft Server SQL',
            'Jira',
            'Git',
            'MySQL',
          ],
        },
        {
          header: 'De 2017 à juin 2020, pour ENIM',
          poste: 'Développeur Fullstack',
          organisation:
            'Collaboration avec une équipe de 5 développeurs, sous la direction de plusieurs chefs de projet et d’un architecte technique.',
          mission:
            "Développer et maintenir plusieurs applications web pour automatiser et optimiser le suivi des démarches administratives pour l'ENIM (marins, tiers, etc.).",
          activites: [
            "Conception, évolution et maintenance d'applications web",
            "Mise en place d'un exécutable Talend pour récupérer, filtrer et mettre à jour des données dans une table Oracle. ",
            'Extraction de données et génération de rapports sous forme de fichiers Excel.',
            'Amélioration des batchs existants et développement de nouveaux batchs. ',
            'Déploiement et test de webservices SOAP',
          ],
          resultat:
            "Développement d'outils permettant d'optimiser les traitements liés au suivi des démarches pour les marins et tiers, en utilisant Talend, Java/Struts 2 et d'autres outils.",
          environnement: [
            'Dozer',
            'Java 6/7',
            'Jenkins',
            'Jenkins',
            'jQuery',
            'JSP',
            'Redmine',
            'SoapUI',
            'Sonar',
            'Spring',
            'Struts 2',
            'Talend',
          ],
        },
      ],
    },
    {
      title: 'NCI (Octobre 2014 à septembre 2015)',
      missions: [
        {
          poste: "Développeur d'application",
          organisation:
            "Equipe de 5 développeurs dont un chef d'équipe et un responsable technique",
          mission:
            'Développer des fonctionnalités et mettre en place des test intégrations pour diverses applications pour le pôle Transport',
          activites: [
            "Créer des tests d'intégrations ainsi que leurs reportings",
            'Développer des composants et interfaces graphiques et les diffuser',
            "Former à l'utilisation de TestComplet 10",
          ],
          resultat:
            "Mise en place de plusieurs évolutions pour le pôle Transport, incluant des améliorations des interfaces et des reportings. En parallèle, création de tests d'intégration et ajout de leurs résultats dans les reportings.",
          environnement: [
            'Delphi XE2',
            'TestComplete 10',
            'SQL Server',
            'Suite Office',
            'Tortoise SVN',
          ],
        },
      ],
    },
    {
      title: 'Androme Informatique (janvier 2014 à mars 2014)',
      missions: [
        {
          poste: 'Développeur Web',
          organisation: 'Equipe de 2 développeurs dont mon maître de stage',
          mission:
            'Mutualisation de 3 applications web pour la gestion de paroisses religieuses',
          activites: [
            'Analyse du cahier des charges',
            'Connaissance des anciennes application',
            "Création d'une base de données MySQL",
            "Développement d'une interface responsive",
          ],
          resultat:
            "Création de certaines fonctionnalités pour faciliter la gestion de paroise ainsi qu'une application pour gérer les entrées téléphoniques et des clients dans une boutique",
          environnement: [
            'HTML',
            'CSS3',
            'Javascript',
            'jQuery',
            'CakePHP 3',
            'MySQL',
          ],
        },
      ],
    },
    {
      title: 'Rectorat de Caen (mai 2013 à juin 2013)',
      missions: [
        {
          poste: 'Développeur Web',
          organisation: 'Autonomie accompagné du Pôle DSI',
          mission:
            "Mutualisation de 3 applications web pour la gestion du droit d'accueil",
          activites: [
            'Analyse du cahier des charges',
            'Analyse des applications existantes',
            "Documentation du droit d'accueil",
            "Création d'une application web (HTML, CSS, JS et PHP) et d'une base de données MySQL",
          ],
          resultat:
            "Développement d'une partie de l'application de gestion ainsi qu'une meilleure capacité d'analyse et d'esprit d'équipe",
          environnement: [
            'HTML',
            'CSS3',
            'Javascript',
            'jQuery',
            'WAMPP',
            'MySQL',
          ],
        },
      ],
    },
  ];
}
