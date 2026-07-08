import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProjetItemComponent } from '../projet-item/projet-item.component';
import { DividerModule } from 'primeng/divider';
import { I18nService } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface IProjet {
  name: string;
  description: string;
  link?: string;
  stack: string[];
  img?: string;
}

@Component({
  selector: 'app-projet-liste',
  standalone: true,
  imports: [CardModule, ProjetItemComponent, DividerModule, TranslatePipe],
  templateUrl: './projet-liste.component.html',
  styleUrls: ['./projet-liste.component.scss'],
})
export class ProjetListeComponent implements OnInit {
  projets: IProjet[] = [];

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    const projetsData = this.i18nService.getNestedObject('projets.list');
    this.projets = projetsData || [];
  }
}
