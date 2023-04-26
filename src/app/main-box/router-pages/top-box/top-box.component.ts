import { Component, Input, OnInit } from '@angular/core';
import { LeaderboardData } from 'src/app/interfaces/leaderboardData.interface';

@Component({
  selector: 'app-top-box',
  templateUrl: './top-box.component.html',
  styleUrls: ['./top-box.component.css'],
})
export class TopBoxComponent {
  @Input() boxTitle!: string;
  @Input() data!: LeaderboardData;

  ngOnInit() {}
}
