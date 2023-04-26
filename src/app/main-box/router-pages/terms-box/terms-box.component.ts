import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Term } from 'src/app/interfaces/termsData.interface';

@Component({
  selector: 'app-terms-box',
  templateUrl: './terms-box.component.html',
  styleUrls: ['./terms-box.component.css'],
})
export class TermsBoxComponent {
  @Input() termsData!: Term | any;
  number!: number;
  testing: any;

  headerTexts: string[] = [
    'არვიცი რა დავწერო აქ',
    'არვიცი რა დავწერო აქ',
    'არვიცი რა დავწერო აქ',
  ];
  previousDivIndex: number | null = null;

  addHeading(index: number) {
    if (this.previousDivIndex !== null && this.previousDivIndex !== index) {
      const previousDiv = document.querySelectorAll('.terms-box > div')[
        this.previousDivIndex
      ] as HTMLElement;
      const previousH4 = previousDiv.querySelector('h4') as HTMLElement;
      previousH4?.remove();
    }
    const div = document.querySelectorAll('.terms-box > div')[
      index
    ] as HTMLElement;
    const p = div.querySelector('p') as HTMLElement;
    const existingH4 = div.querySelector('h4') as HTMLElement;
    if (existingH4) {
      existingH4.remove();
    } else {
      const h4 = document.createElement('h4');
      h4.textContent = this.headerTexts[index] || `Heading ${index + 1}`;
      h4.style.color = '#fff';
      h4.style.paddingTop = '2rem';
      p.insertAdjacentElement('afterend', h4);
    }
    this.previousDivIndex = index;
  }
}
