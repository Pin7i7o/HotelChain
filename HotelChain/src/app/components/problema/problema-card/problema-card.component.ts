import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problema-card',
  templateUrl: './problema-card.component.html',
  styleUrls: ['./problema-card.component.scss'],
})
export class ProblemaCardComponent  implements OnInit {

  @Input() prioridade!: string;
  @Input() infraestrutura!: string;
  @Input() equipamento!: string;
  @Input() descricao!: string;

  constructor() { }

  ngOnInit() {}

}
