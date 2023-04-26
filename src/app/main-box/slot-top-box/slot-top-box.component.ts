import { Component, Input } from '@angular/core';

@Component({
  selector: 'slot-top-box',
  templateUrl: './slot-top-box.component.html',
  styleUrls: ['./slot-top-box.component.css'],
})
export class SlotsDateComponent {
  @Input() mainBox = false;
}
