import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CategoriesData } from 'src/app/interfaces/categoriesData.interface';
import { KeyData } from 'src/app/interfaces/keysData.interface';
import { OffersDataFinal } from 'src/app/interfaces/offerDataFinal.interface';
import { PokerData } from 'src/app/interfaces/pokerData.interface';
import { Term } from 'src/app/interfaces/termsData.interface';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css'],
})
export class FinalStageComponent implements OnInit {
  titleFinal = 'A კატეგორიის საგზურში შედის';
  titleFinal2 = 'ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ';
  titlePathImg = '/assets/final-title.png';
  offerDataFinal!: OffersDataFinal[];
  categoriesData!: CategoriesData;
  pokerData!: PokerData;
  keysData!: KeyData[];
  termsData!: Term;
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.offerDataFinal = this.service.getOfferDataFinal();
    this.categoriesData = this.service.getCategoriesData();
    this.pokerData = this.service.getPokerData();
    this.keysData = this.service.getKeysData();
    this.termsData = this.service.getTermsData();
  }
}
