import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-similar-carousel-box',
  templateUrl: './similar-carousel-box.component.html',
  styleUrls: ['./similar-carousel-box.component.css'],
})
export class SimilarCarouselBoxComponent {
  @ViewChild('sliderContainer') carouselContainer!: ElementRef;

  private scrollSubscription!: Subscription;
  private hammer!: HammerManager;
  constructor(private scrollDispatcher: ScrollDispatcher) {}

  ngAfterViewInit(): void {
    const carousel = this.carouselContainer.nativeElement;
    this.hammer = new Hammer.Manager(carousel, {
      recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }],
        [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }],
      ],
    });

    this.hammer.on('swipeleft', () => {
      carousel.scrollLeft += 300;
    });

    this.hammer.on('swiperight', () => {
      carousel.scrollLeft -= 300;
    });

    let panStartX = 0;
    let scrollLeft = 0;
    let isPanning = false;

    this.hammer.on('panstart', (event: HammerInput) => {
      isPanning = true;
      panStartX = event.center.x;
      scrollLeft = carousel.scrollLeft;
    });

    this.hammer.on('panend', () => {
      isPanning = false;
    });

    this.hammer.on('panmove', (event: HammerInput) => {
      if (!isPanning) return;
      const panDeltaX = event.deltaX;
      carousel.scrollLeft = scrollLeft - panDeltaX;
    });

    this.scrollSubscription = this.scrollDispatcher.scrolled().subscribe(() => {
      isPanning = false;
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}
