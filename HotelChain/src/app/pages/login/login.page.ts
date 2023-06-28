import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const loggedIn = await this.authService.login(username, password);

      if (loggedIn) {
        // Login bem-sucedido, redirecionar para a página principal ou realizar ação adequada
        console.log('Login realizado com sucesso!');
      } else {
        // Login falhou, exibir mensagem de erro ou realizar ação adequada
        console.log('Credenciais inválidas. Tente novamente.');
      }
    } else {
      // Formulário inválido, exibir mensagem de erro ou realizar ação adequada
      console.log('Preencha todos os campos obrigatórios.');
    }
  }
}