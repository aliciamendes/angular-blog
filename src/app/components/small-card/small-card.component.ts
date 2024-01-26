import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() text_smallcard: string = '';
  @Input() image_smallcard: string = '';
  @Input() id: string = '0';
}
