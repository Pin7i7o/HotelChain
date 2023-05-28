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

  constructor(private supabase: SupabaseService, public navCtrl: NavController) {
    this.utilizadores = [];
    this.utilizador = {
      id: null || 0,
      email: '',
      contacto: null || 0,
      data_nascimento: new Date(),
      genero: '',
      username: '',
      password: ''
    }
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

  checkLogin(){
     let check = false;
     let size = 0;

     while (check == false || size != this.utilizadores.length) {
      for (let index = 0; index < this.utilizadores.length; index++) {
        if(this.utilizadores[index].username == this.username && this.utilizadores[index].password == this.password){
          check = true;
        } else{
          check = false;
          size++;
        }
      }
     }

     if(check){
      this.navCtrl.navigateForward('home');
     }
  }

  ngOnInit() {}

  

}
