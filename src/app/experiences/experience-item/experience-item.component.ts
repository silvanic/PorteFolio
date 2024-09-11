import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { Mission } from '../experience/experience.component';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [AccordionModule, CardModule, PanelModule, ChipModule, CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  @Input()
  mission!: Mission;
}
