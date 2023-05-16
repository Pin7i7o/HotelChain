import { Component } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})
export class MapsPage {

  showImage: boolean = false;
  floorNumber: number = 0;
  selectedImage: string = "";

  constructor() {}

  toggleImage(){
    this.showImage = !this.showImage;
  }

  

  updateSelectedImage() {
    switch (this.floorNumber) {
      case 1:
        this.selectedImage = '/assets/john.png';
        break;
      case 2:
        this.selectedImage = '/assets/logo.png';
        break;
      case 0:
        break;
      default:
        this.selectedImage = '/assets/planoPiso.png';
        break;
    }
  }

  ionViewDidEnter() {
    this.updateSelectedImage();
  }

  ionViewWillLeave() {
    this.selectedImage = '/assets/planoPiso.png';
  }
}
