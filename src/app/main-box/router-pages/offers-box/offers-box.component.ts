import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/interfaces/offer.interface';

@Component({
  selector: 'app-offers-box',
  templateUrl: './offers-box.component.html',
  styleUrls: ['./offers-box.component.css'],
})
export class OffersBoxComponent {
  @Input() offersData!: Offer[];
  @Input() bgGray = true;
}
