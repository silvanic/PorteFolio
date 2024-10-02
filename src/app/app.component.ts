import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProjetListeComponent } from './projets/projet-liste/projet-liste.component';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { CompetencesListeComponent } from './competences/competences-liste/competences-liste.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExperienceComponent,
    ButtonModule,
    TabViewModule,
    CardModule,
    ProjetListeComponent,
    CompetencesListeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portefolio';

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    // base
    this.meta.updateTag({
      name: 'title',
      content: `Portefolio d'Alexandre DEZIER`,
    });
    this.meta.addTag({
      name: 'description',
      content: 'Portefolio du développeur Fullstack Alexandre DEZIER',
    });
    this.meta.addTag({
      name: 'author',
      content: 'Alexandre DEZIER',
    });
    this.meta.addTag({
      name: 'copyright',
      content: 'Alexandre DEZIER',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Portefolio, développeur, fullstack, front, informatique, Alexandre DEZIER',
    });
    // og
    this.meta.addTag({
      property: 'og:title',
      content: 'Alexandre DEZIER',
    });
    this.meta.addTag({
      property: 'description',
      content: 'Portefolio du développeur Fullstack Alexandre DEZIER',
    });
    this.meta.addTag({
      property: 'og:type',
      content: 'portefolio',
    });
    this.meta.addTag({
      property: 'og:image',
      content: 'assets/img/shared.jpg',
    });
    this.meta.addTag({
      property: 'og:url',
      content: document.URL,
    });
    // twitter
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.addTag({
      property: 'twitter:image',
      content: 'assets/img/shared.jpg',
    });
    this.meta.addTag({
      name: 'twitter:image-alt',
      content: 'Alexandre DEZIER, Développeur Fullstack',
    });
    //
  }
}
