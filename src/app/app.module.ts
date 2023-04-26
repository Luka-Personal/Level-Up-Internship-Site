import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { RouterSwitcherComponent } from './main-box/router-switcher/router-switcher.component';
import { CashGamesComponent } from './main-box/router-pages/cash-games/cash-games.component';
import { SpringSeriesComponent } from './main-box/router-pages/spring-series/spring-series.component';
import { FinalStageComponent } from './main-box/router-pages/final-stage/final-stage.component';
import { TitleComponent } from './main-box/title/title.component';
import { TopBoxComponent } from './main-box/router-pages/top-box/top-box.component';
import { OffersBoxComponent } from './main-box/router-pages/offers-box/offers-box.component';
import { SideLeaderboardComponent } from './main-box/router-pages/side-leaderboard/side-leaderboard.component';
import { TermsBoxComponent } from './main-box/router-pages/terms-box/terms-box.component';
import { SimilarCarouselBoxComponent } from './main-box/router-pages/similar-carousel-box/similar-carousel-box.component';
import { CommonModule } from '@angular/common';
import { EverydayOfferComponent } from './main-box/router-pages/spring-series/everyday-offer/everyday-offer.component';
import { TitleSmComponent } from './main-box/title-sm/title-sm.component';
import { CategoriesDataComponent } from './main-box/router-pages/final-stage/categories-data/categories-data.component';
import { TitleImgComponent } from './main-box/title-img/title-img.component';
import { KeysDataComponent } from './main-box/router-pages/final-stage/keys-data/keys-data.component';
import { SlotsDateComponent } from './main-box/slot-top-box/slot-top-box.component';

const appRoutes: Routes = [
  { path: '', component: CashGamesComponent },
  { path: 'cash-games', component: CashGamesComponent },
  { path: 'spring-series', component: SpringSeriesComponent },
  { path: 'final-stage', component: FinalStageComponent },
];
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    MainBoxComponent,
    RouterSwitcherComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent,
    TitleComponent,
    TopBoxComponent,
    OffersBoxComponent,
    SideLeaderboardComponent,
    TermsBoxComponent,
    SimilarCarouselBoxComponent,
    EverydayOfferComponent,
    TitleSmComponent,
    CategoriesDataComponent,
    TitleImgComponent,
    KeysDataComponent,
    SlotsDateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
