import { Component, OnInit } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { I18nService } from '../../services/i18n.service';

export interface CompetenceCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-competences-liste',
  standalone: true,
  imports: [ChipModule],
  templateUrl: './competences-liste.component.html',
  styleUrls: ['./competences-liste.component.scss'],
})
export class CompetencesListeComponent implements OnInit {
  categories: { [key: string]: CompetenceCategory } = {};
  categoryKeys: string[] = [];

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    const competencesData = this.i18nService.getNestedObject('competences.categories') || {};
    this.categories = competencesData;
    this.categoryKeys = Object.keys(competencesData);
  }
}
