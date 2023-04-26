import { Component, Input, OnInit } from '@angular/core';
import { Term } from 'src/app/interfaces/termsData.interface';

@Component({
  selector: 'app-terms-box',
  templateUrl: './terms-box.component.html',
  styleUrls: ['./terms-box.component.css'],
})
export class TermsBoxComponent {
  @Input() termsData!: Term | any;
}
