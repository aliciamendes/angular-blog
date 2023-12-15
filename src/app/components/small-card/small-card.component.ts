import { Component } from '@angular/core';
import { MenuTittleComponent } from '../menu-tittle/menu-tittle.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [
    MenuTittleComponent
  ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

}
