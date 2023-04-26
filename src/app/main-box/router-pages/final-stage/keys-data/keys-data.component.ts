import { Component, Input } from '@angular/core';
import { KeyData } from 'src/app/interfaces/keysData.interface';

@Component({
  selector: 'app-keys-data',
  templateUrl: './keys-data.component.html',
  styleUrls: ['./keys-data.component.css'],
})
export class KeysDataComponent {
  @Input() data!: KeyData;
}
