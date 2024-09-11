import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProjetListeComponent } from './projets/projet-liste/projet-liste.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portefolio';
}
