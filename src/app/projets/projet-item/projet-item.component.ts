import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProjet } from '../projet-liste/projet-liste.component';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-projet-item',
  standalone: true,
  imports: [CommonModule, PanelModule, ChipModule, ImageModule],
  templateUrl: './projet-item.component.html',
  styleUrl: './projet-item.component.scss',
})
export class ProjetItemComponent {
  @Input()
  projet!: IProjet;
}
