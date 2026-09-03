import { Component, Input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { IProjet } from '../projet-liste/projet-liste.component';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-projet-item',
  standalone: true,
  imports: [PanelModule, ChipModule, ImageModule, SlicePipe],
  templateUrl: './projet-item.component.html',
  styleUrls: ['./projet-item.component.scss'],
})
export class ProjetItemComponent {
  @Input()
  projet!: IProjet;
}
