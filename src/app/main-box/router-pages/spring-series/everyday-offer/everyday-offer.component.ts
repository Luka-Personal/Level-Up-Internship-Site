import { Component, Input, OnInit } from '@angular/core';
import { OffersData } from 'src/app/interfaces/offersData.interface';
import { TournamentInfoDesktop } from 'src/app/interfaces/tournamentInfo.interface';

@Component({
  selector: 'app-everyday-offer',
  templateUrl: './everyday-offer.component.html',
  styleUrls: ['./everyday-offer.component.css'],
})
export class EverydayOfferComponent {
  @Input() offerData!: TournamentInfoDesktop[];
  @Input() offerDataMain!: TournamentInfoDesktop[];
}
