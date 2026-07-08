import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../services/i18n.service';

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
  application?: string;
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
    TranslatePipe,
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  formationsCertifications: Event[] = [];
  experiences: Experience[] = [];

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    this.formationsCertifications = this.i18nService.getNestedObject('experiences.formations') || [];
    this.experiences = this.i18nService.getNestedObject('experiences.list') || [];
  }
}
