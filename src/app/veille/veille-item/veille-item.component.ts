import { Component, Input } from '@angular/core';
import { IVeille } from '../veille.interface';

@Component({
  selector: 'app-veille-item',
  standalone: true,
  imports: [],
  templateUrl: './veille-item.component.html',
  styleUrls: ['./veille-item.component.scss'],
})
export class VeilleItemComponent {
  @Input() veille!: IVeille;
}
