import { Component, OnInit } from '@angular/core';
import { Utilizadores } from 'src/app/services/Utilizadores';
import { SupabaseService } from 'src/app/services/Utilizadores.supabase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  utilizadores: Utilizadores[];
  utilizador: Utilizadores;
  isLoadingUtilizadores: boolean;
  username!: string;
  password!: string;
  error: string = '';

  constructor(private supabase: SupabaseService, public navCtrl: NavController) {
    this.utilizadores = [];
    this.utilizador = {
      id: undefined,
      email: '',
      contacto: 0,
      data_nascimento: new Date(),
      genero: '',
      username: '',
      password: ''
    };
    this.isLoadingUtilizadores = true;
  }

  async ionViewWillEnter() {
    await this.getUtilizadores();
  }

  async getUtilizadores() {
    this.isLoadingUtilizadores = true; 
    this.utilizadores = await this.supabase.getUtilizadores();
    this.isLoadingUtilizadores = false; 
  }

  checkLogin() {
    const trimmedUsername = this.username.trim();
    const trimmedPassword = this.password.trim();
  
    const foundUser = this.utilizadores.find(user =>
      user.username === trimmedUsername && user.password === trimmedPassword
    );
  
    if (foundUser) {
      this.navCtrl.navigateForward('home');
    } else {
      this.error = 'Invalid login credentials. Please try again.';
    }
  }
  

  ngOnInit() {}
}

