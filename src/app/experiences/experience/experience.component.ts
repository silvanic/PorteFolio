import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';

interface Event {
  title: string;
  date: string;
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
}
