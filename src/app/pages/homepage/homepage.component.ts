import { Component } from '@angular/core';
import { MenuTittleComponent } from '../../components/menu-tittle/menu-tittle.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [
    MenuTittleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
  ],
})
export class HomepageComponent {}
