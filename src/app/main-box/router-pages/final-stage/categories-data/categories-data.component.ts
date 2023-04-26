import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.css'],
})
export class CategoriesDataComponent {
  @Input() data!: Category;
}
