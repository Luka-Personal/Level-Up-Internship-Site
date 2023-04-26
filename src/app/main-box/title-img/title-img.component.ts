import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-img',
  templateUrl: './title-img.component.html',
  styleUrls: ['./title-img.component.css'],
})
export class TitleImgComponent {
  @Input() imgPath!: string;
}
