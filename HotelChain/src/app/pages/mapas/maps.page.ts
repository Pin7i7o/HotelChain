import { Component } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})
export class MapsPage {

  floorNumber: number = 0;
  floor: string = '/assets/icons/interrogação.png';

  constructor(){}

  updateFloor() {
    switch (this.floorNumber) {
      case 1:
        this.floor = '/assets/logo.png';
        break;
      case 2:
        this.floor = '/assets/logoH.png';
        break;
      case 0:
        this.floor = '/assets/john.png';
        break;
      default:
        this.floor = '/assets/icons/interrogação.png';
        break;
    }
  }
}
