import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problema-equip-info',
  templateUrl: './problema-equip-info.component.html',
  styleUrls: ['./problema-equip-info.component.scss'],
})
export class ProblemaEquipInfoComponent  implements OnInit {
  @Input() equipamento!: number;
  @Input() descricao!: string;


  constructor() { }

  ngOnInit() {}

}
