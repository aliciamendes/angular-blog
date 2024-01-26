import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTittleComponent } from '../../components/menu-tittle/menu-tittle.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

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
export class HomepageComponent {
  imageBig: string =
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*HdwNFQOaTJBu26gEddg8gw.png';
  titleBig: string =
    'Some big things are happening next week on November 6th 🎉 ';
  textBig: string =
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  imageSmall: string =
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*aCsnm9viiL5Fo0JC-I_exQ.png';
  titleSmall: string = 'Angular News';
  textSmall: string =
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit.';
}
