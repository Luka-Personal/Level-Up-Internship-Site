import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-sm',
  templateUrl: './title-sm.component.html',
  styleUrls: ['./title-sm.component.css'],
})
export class TitleSmComponent {
  @Input() title!: string;
}
