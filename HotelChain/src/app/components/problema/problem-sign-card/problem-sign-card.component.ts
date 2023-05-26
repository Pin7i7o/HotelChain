import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-sign-card',
  templateUrl: './problem-sign-card.component.html',
  styleUrls: ['./problem-sign-card.component.scss'],
})
export class ProblemSignCardComponent  implements OnInit {

  @Input() icon!: string;

  constructor() { }

  ngOnInit() {}

}
