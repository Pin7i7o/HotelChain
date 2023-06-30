import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
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
      const loggedIn = await this.loginService.login(username, password);

      if (loggedIn) {
        localStorage.setItem('username', username);
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