import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-router-switcher',
  templateUrl: './router-switcher.component.html',
  styleUrls: ['./router-switcher.component.css'],
})
export class RouterSwitcherComponent {
  viewportWidth: number = window.innerWidth;
  @HostListener('window:resize')
  onResize() {
    this.viewportWidth = window.innerWidth;
  }
}
