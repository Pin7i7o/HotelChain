import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problema-button-control',
  templateUrl: './problema-button-control.component.html',
  styleUrls: ['./problema-button-control.component.scss'],
})
export class ProblemaButtonControlComponent  implements OnInit {

  @Input() diff!: string;
  @Input() diff_text!: string;
  equipOn: boolean = true;
  showOverlay: boolean = false;

  constructor() { }

  ngOnInit() {}

  setEquipOnOff(){
    this.equipOn = !this.equipOn;
  }

  setOverlayOn(){
    this.showOverlay = true;
  }

  onButtonClick(){
    this.setEquipOnOff();
    this.setOverlayOn();
    setTimeout(() => {
      this.showOverlay = false;
    }, 3000);
  }

}
