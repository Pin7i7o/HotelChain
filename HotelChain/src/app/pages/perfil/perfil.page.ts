import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string = '';

  constructor(private loginService: LoginService) { }

  async ngOnInit() {
    this.username = await this.loginService.getUser();
  }

}
