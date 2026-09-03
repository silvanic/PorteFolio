import { Component, OnInit } from '@angular/core';
import { VeilleItemComponent } from '../veille-item/veille-item.component';
import { I18nService } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IVeille } from '../veille.interface';

@Component({
  selector: 'app-veille-liste',
  standalone: true,
  imports: [VeilleItemComponent, TranslatePipe],
  templateUrl: './veille-liste.component.html',
  styleUrls: ['./veille-liste.component.scss'],
})
export class VeilleListeComponent implements OnInit {
  veilles: IVeille[] = [];

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    const veilleData = this.i18nService.getNestedObject('veille.list');
    this.veilles = veilleData || [];
  }
}
