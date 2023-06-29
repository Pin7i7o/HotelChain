import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToMapsPage(){
    this.navCtrl.navigateForward('mapas');
  }

  goToAlertsPage(){
    this.navCtrl.navigateForward('alertas');
  }

  goToInfoPage(){
    this.navCtrl.navigateForward('info');
  }

  goToProfilePage(){
    this.navCtrl.navigateForward('perfil');
  }

}
