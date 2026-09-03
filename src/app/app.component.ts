import { Component } from '@angular/core';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { ProjetListeComponent } from './projets/projet-liste/projet-liste.component';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { CompetencesListeComponent } from './competences/competences-liste/competences-liste.component';
import { VeilleListeComponent } from './veille/veille-liste/veille-liste.component';
import { I18nService } from './services/i18n.service';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ExperienceComponent,
    ButtonModule,
    TabsModule,
    ProjetListeComponent,
    VeilleListeComponent,
    CompetencesListeComponent,
    TranslatePipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portefolio';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private i18nService: I18nService
  ) {}

  ngOnInit(): void {
    const name = this.i18nService.get('app.name');
    const role = this.i18nService.get('app.title');
    const title = `Portefolio d'${name}`;
    const description = `Portefolio du développeur Fullstack ${name}`;
    const image = 'assets/img/shared.jpg';
    const url = window.location.href;

    this.titleService.setTitle(title);

    // SEO standard
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: name });
    this.meta.updateTag({ name: 'copyright', content: name });
    this.meta.updateTag({
      name: 'keywords',
      content: `Portefolio,portfolio, développeur, fullstack, front, informatique, ${name}`,
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:image-alt', content: `${name}, ${role}` });
  }
}

