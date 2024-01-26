import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() title_bigcard: string = '';
  @Input() text_bigcard: string = '';
  @Input() image_bigcard: string = '';
  @Input() id: string = '1';
}
