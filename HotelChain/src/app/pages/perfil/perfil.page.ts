import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  async ngOnInit() {
    this.username = await this.loginService.getUser();
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login')
  }

}
