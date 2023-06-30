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
    this.navCtrl.navigateForward('/tabs/mapas');
  }

  goToAlertsPage(){
    this.navCtrl.navigateForward('/tabs/alertas');
  }

  goToInfoPage(){
    this.navCtrl.navigateForward('/tabs/info');
  }

  goToProfilePage(){
    this.navCtrl.navigateForward('/tabs/perfil');
  }

}
