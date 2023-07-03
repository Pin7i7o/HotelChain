import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(public navCtrl: NavController, private loginService: LoginService, private router: Router) { }

  async ngOnInit() {
    this.username = await this.loginService.getUser();
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

  redirectToInstructions() {
    this.router.navigateByUrl('/instrucoes');
  } 

}
