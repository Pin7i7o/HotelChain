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
    // Obtém o nome de usuário do serviço de login
    this.username = await this.loginService.getUser();
  }

  // Navega para a página de mapas
  goToMapsPage(){
    this.navCtrl.navigateForward('/tabs/mapas');
  }

  // Navega para a página de alertas
  goToAlertsPage(){
    this.navCtrl.navigateForward('/tabs/alertas');
  }

  // Navega para a página de informações
  goToInfoPage(){
    this.navCtrl.navigateForward('/tabs/info');
  }

  // Navega para a página de perfil
  goToProfilePage(){
    this.navCtrl.navigateForward('/tabs/perfil');
  }

  // Redireciona para a página de instruções
  redirectToInstructions() {
    this.router.navigateByUrl('/instrucoes');
  } 
}

