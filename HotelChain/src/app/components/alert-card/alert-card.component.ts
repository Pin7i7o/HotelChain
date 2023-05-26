import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
})

export class AlertCardComponent  implements OnInit {

  @Input()
  descricao!: string;
  @Input() data!: string;
  @Input() prioridade!: string;
  
  constructor() { }

  ngOnInit() {}

}
