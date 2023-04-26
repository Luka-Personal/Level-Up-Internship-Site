import { EventEmitter, HostListener, Injectable } from '@angular/core';
import { CategoriesData } from './interfaces/categoriesData.interface';
import { KeyData } from './interfaces/keysData.interface';
import { LeaderboardData } from './interfaces/leaderboardData.interface';
import { OffersDataFinal } from './interfaces/offerDataFinal.interface';
import { OffersData } from './interfaces/offersData.interface';
import { PokerData } from './interfaces/pokerData.interface';
import { Term } from './interfaces/termsData.interface';
import { TournamentInfoDesktop } from './interfaces/tournamentInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  myEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  leaderboardDataDesktop: LeaderboardData = [
    { place: true, titleCustom: false },
    [
      {
        place: 1,
        voucher: '-',
        prize: 'A კატეგორიის საგზური',
        icon: '/assets/travel-icon-sm.png',
      },
      {
        place: 2,
        voucher: '-',
        prize: 'B კატეგორიის საგზური',
        icon: '/assets/ticket-icon-sm.png',
      },
      {
        place: 3,
        voucher: '1500 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
      {
        place: 4,
        voucher: '1200 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
      {
        place: 5,
        voucher: '1000 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
      {
        place: 6,
        voucher: '800 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
      {
        place: 7,
        voucher: '800 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
      {
        place: 8,
        voucher: '800 gel',
        prize: 'სპეც. ტურნირის ბილეთი',
      },
    ],
  ];
  leaderboardDataMobile: LeaderboardData = [
    { place: true, titleCustom: false },
    [
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
      {
        place: 1,
        voucher: '1 500 ₾',
        prize: 'A კატეგორიის საგზური',
      },
    ],
  ];
  offersData: OffersData[] = [
    {
      icon: '/assets/travel-icon-sm.png',
      text: 'The Festival in Malta-ს საგზური',
    },
    {
      icon: '/assets/ticket-icon-sm.png',
      text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური',
    },
    {
      icon: '/assets/ticket-icon-sm.png',
      text: 'ტექნიკის მაღაზიის ვაუჩერი',
    },
  ];
  termsData: Term = [
    'როდის იწყება და რა ფორმატით გაიმართება აქცია',
    'როგორ მივიღო აქციაში მონაწილეობა?',
    'სხვადასვა',
  ];
  offerDataFinal: OffersDataFinal[] = [
    {
      text: '15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს',
    },
  ];
  categoriesData: CategoriesData = [
    [
      {
        text: 'ორმხრივი ავიაბილეთი',
        icon: '/assets/final-item-ticket-icon.png',
      },
      {
        text: 'The Festival in Malta -ს მეინ ივენთის ბაი-ინი',
        icon: '/assets/final-item-event-icon.png',
      },
      {
        text: 'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
        icon: '/assets/final-item-event-icon.png',
      },
      {
        text: 'სასტუმრო Golden Tulip Vivaldi Hote',
        icon: '/assets/final-item-hotel-icon.png',
      },
      { text: '€500 სახარჯი ფული', icon: '/assets/final-item-money-icon.png' },
    ],
    [
      {
        text: 'ორმხრივი ავიაბილეთი',
        icon: '/assets/final-item-ticket-icon.png',
      },
      {
        text: 'The Festival in Malta -ს მეინ ივენთის ბაი-ინი',
        icon: '/assets/final-item-event-icon.png',
      },
      {
        text: 'სასტუმრო',
        icon: '/assets/final-item-hotel-icon.png',
      },
      { text: '€500 სახარჯი ფული', icon: '/assets/final-item-money-icon.png' },
    ],
  ];
  pokerData: PokerData = [
    [
      {
        mainTitle: '“Cashgame Highrollers” -',
        paragraph: '1 საგზური',
      },
      {
        mainTitle: '„Cashgame Grinders”',
        paragraph: '1 საგზური',
      },
      {
        mainTitle: '„Tournament Sharks“ -',
        paragraph: '1 საგზური',
      },
    ],
    [
      {
        mainTitle: '„The Festival in Malta, GTD“',
        paragraph: 'A კატეგორიის 1 საგზური',
        paragraph2: 'B კატეგორიის 1 საგზური',
        span: 'ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
        diffIcon: true,
      },
      {
        mainTitle: '“Cashgame Highrollers” -',
        paragraph: 'C კატეგორიის 1 საგზური',
        paragraph2:
          'ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
      },
    ],
  ];
  keysData: KeyData[] = [
    {
      position: '1',
      key: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    },
    {
      position: '2',
      key: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    },
    {
      position: '3',
      key: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    },
    {
      position: '4',
      key: 'სპეც. ტურნირი Tournament Sharks III ადგილი',
    },
    {
      position: '5',
      key: 'Holdem Grinders ლიდერბორდის გამარჯვებული',
    },
    {
      position: '6',
      key: 'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები',
    },
    {
      position: '7',
      key: 'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები',
    },
    {
      position: '8',
      key: 'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები',
    },
  ];
  tournamentInfoDesktop: TournamentInfoDesktop[] = [
    {
      titleLeft: 'Holdem Highrollers',
      priceLeft: '50 000 ₾',
      priceRight: 'ბაი-ინი - 550₾',
      dateRight: '27 აპრილი',
    },
    {
      titleLeft: 'Omaha Highrollers',
      priceLeft: '50 000 ₾',
      priceRight: 'ბაი-ინი - 550₾',
      dateRight: '29 აპრილი',
    },
  ];
  tournamentInfoMobile: TournamentInfoDesktop[] = [
    {
      titleLeft: 'Omaha Highrollers',
      priceLeft: '40 000₾',
      priceRight: 'ბაი-ინი XXX₾',
      dateRight: '27 დეკემბერი',
    },
    {
      titleLeft: 'Omaha Highrollers',
      priceLeft: '40 000₾',
      priceRight: 'ბაი-ინი XXX₾',
      dateRight: '27 დეკემბერი',
    },
  ];
  tournamentInfoMainDesktop: TournamentInfoDesktop[] = [
    {
      titleLeft: 'Main Events',
      priceLeft: '150 000₾',
      priceRight: 'ბაი-ინი - 550₾',
      dateRight: '29 აპრილი',
    },
  ];
  tournamentInfoMainMobile: TournamentInfoDesktop[] = [
    {
      titleLeft: 'Omaha Highrollers',
      priceLeft: '40 000₾',
      priceRight: 'ბაი-ინი XXX₾',
      dateRight: '27 დეკემბერი',
    },
  ];
  getTournamentInfoMobile() {
    return this.tournamentInfoMobile;
  }
  getTournamentInfoMainMobile() {
    return this.tournamentInfoMainMobile;
  }
  getTournamentInfoDesktop() {
    return this.tournamentInfoDesktop;
  }
  getTournamentInfoDesktopMain() {
    return this.tournamentInfoMainDesktop;
  }
  getLeaderBoardData(custom: boolean) {
    if (custom) {
      this.leaderboardDataDesktop[0].titleCustom = true;
    } else {
      this.leaderboardDataDesktop[0].titleCustom = false;
    }
    return this.leaderboardDataDesktop;
  }
  getLeaderBoardDataMobile(custom: boolean) {
    if (custom) {
      this.leaderboardDataMobile[0].titleCustom = true;
    } else {
      this.leaderboardDataMobile[0].titleCustom = false;
    }
    return this.leaderboardDataMobile;
  }
  getOffersData() {
    return this.offersData;
  }
  getTermsData() {
    return this.termsData;
  }
  getOfferDataFinal() {
    return this.offerDataFinal;
  }
  getCategoriesData() {
    return this.categoriesData;
  }
  getPokerData() {
    return this.pokerData;
  }
  getKeysData() {
    return this.keysData;
  }
}
