import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Inicialização do formulário de login
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      // Obtenção dos valores de usuário e senha do formulário
      const { username, password } = this.loginForm.value;
      // Chamada assíncrona do serviço de login
      const loggedIn = await this.loginService.login(username, password);

      if (loggedIn) {
        // Armazenar o nome de usuário no armazenamento local
        localStorage.setItem('username', username);
        // Redirecionar para a página inicial
        this.router.navigateByUrl('/home');
      } else {
        // Exibir mensagem de erro e criar um toast
        this.errorMessage = 'Username ou Password inválidos.';
        const toast = await this.toastController.create({
          message: this.errorMessage,
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      }
    } else {
      // Exibir mensagem de erro e criar um toast quando o formulário é inválido
      this.errorMessage = 'Preencha todos os campos para prosseguir.';
      const toast = await this.toastController.create({
        message: this.errorMessage,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }
}
