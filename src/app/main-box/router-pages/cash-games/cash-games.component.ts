import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { LeaderboardData } from 'src/app/interfaces/leaderboardData.interface';
import { OffersData } from 'src/app/interfaces/offersData.interface';
import { Term } from 'src/app/interfaces/termsData.interface';

@Component({
  selector: 'app-cash-games',
  templateUrl: './cash-games.component.html',
  styleUrls: ['./cash-games.component.css'],
})
export class CashGamesComponent implements OnInit {
  titleCash = '1 ₾ რეიკი = 1 ქულას';
  titleLeaderboard1 = 'ჰოლდემის TOP20 ლიდერბორდი';
  titleLeaderboard2 = 'TOP20 ლიდერბორდი ჰოლდემში';
  offersDataCash!: OffersData[];
  leaderboardDataCash!: LeaderboardData;
  termsDataCash!: Term;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.myEventEmitter.subscribe((data) => {
      if (data === 'desktop') {
        this.leaderboardDataCash = this.service.getLeaderBoardData(false);
      } else {
        this.leaderboardDataCash = this.service.getLeaderBoardDataMobile(false);
      }
    });
    this.termsDataCash = this.service.getTermsData();
    this.offersDataCash = this.service.getOffersData();
    if (window.innerWidth > 500) {
      this.leaderboardDataCash = this.service.getLeaderBoardData(false);
    } else {
      this.leaderboardDataCash = this.service.getLeaderBoardDataMobile(false);
    }
  }
}
