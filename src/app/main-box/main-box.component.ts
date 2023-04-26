import { Component, HostListener } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css'],
})
export class MainBoxComponent {
  constructor(private service: DataService) {}
  viewportWidth: number = window.innerWidth;
  @HostListener('window:resize')
  onResize() {
    this.viewportWidth = window.innerWidth;
    if (window.innerWidth > 500) {
      this.service.myEventEmitter.emit('desktop');
    } else {
      this.service.myEventEmitter.emit('mobile');
    }
  }
}
