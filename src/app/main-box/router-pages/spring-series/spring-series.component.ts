import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LeaderboardData } from 'src/app/interfaces/leaderboardData.interface';
import { OffersData } from 'src/app/interfaces/offersData.interface';
import { Term } from 'src/app/interfaces/termsData.interface';
import { TournamentInfoDesktop } from 'src/app/interfaces/tournamentInfo.interface';

@Component({
  selector: 'app-spring-series',
  templateUrl: './spring-series.component.html',
  styleUrls: ['./spring-series.component.css'],
})
export class SpringSeriesComponent implements OnInit {
  constructor(private service: DataService) {}
  titleSpring1 = 'ტურნირები და სატელიტები';

  titleSpring2!: string;
  leaderboardDataSpring!: LeaderboardData;
  offersDataSpring!: OffersData[];
  termsData!: Term;
  tournamentInfo!: TournamentInfoDesktop[];
  tournamentInfoMain!: TournamentInfoDesktop[];
  ngOnInit() {
    this.service.myEventEmitter.subscribe((data) => {
      if (data === 'desktop') {
        this.leaderboardDataSpring = this.service.getLeaderBoardData(true);
        this.tournamentInfo = this.service.getTournamentInfoDesktop();
        this.tournamentInfoMain = this.service.getTournamentInfoDesktopMain();
        this.titleSpring2 =
          'ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ';
      } else {
        this.leaderboardDataSpring =
          this.service.getLeaderBoardDataMobile(true);
        this.tournamentInfo = this.service.getTournamentInfoMobile();
        this.tournamentInfoMain = this.service.getTournamentInfoMainMobile();
        this.titleSpring2 =
          'მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით';
      }
    });
    this.offersDataSpring = this.service.getOffersData();
    this.termsData = this.service.getTermsData();
    if (window.innerWidth > 500) {
      this.leaderboardDataSpring = this.service.getLeaderBoardData(true);
      this.tournamentInfo = this.service.getTournamentInfoDesktop();
      this.tournamentInfoMain = this.service.getTournamentInfoDesktopMain();
      this.titleSpring2 =
        'ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ';
    } else {
      this.leaderboardDataSpring = this.service.getLeaderBoardDataMobile(true);
      this.tournamentInfo = this.service.getTournamentInfoMobile();
      this.tournamentInfoMain = this.service.getTournamentInfoMainMobile();
      this.titleSpring2 =
        'მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით';
    }
  }
}
