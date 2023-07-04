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
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Username ou Password inválidos.';
        const toast = await this.toastController.create({
          message: this.errorMessage,
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      }
    } else {
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