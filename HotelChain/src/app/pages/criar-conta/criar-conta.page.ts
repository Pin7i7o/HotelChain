import { Component, OnInit } from '@angular/core';
import { Utilizadores } from '../services/Utilizadores';
import { SupabaseService } from '../services/Utilizadores.supabase.service.ts';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
  utilizador: Utilizadores = {
    email: '',
    contacto: 0,
    data_nascimento: new Date(),
    genero: '',
    username: '',
    password: ''
  };

  constructor(private SupabaseService: SupabaseService) { }

  ngOnInit() {
  }

  criarConta() {
    this.SupabaseService.insertUtilizador(this.utilizador)
      .then(data => {
        // Insert code for handling successful account creation
        console.log('Utilizador criado:', data);
      })
      .catch((error: any) => {
        // Insert code for handling errors in account creation
        console.error('Erro ao criar utilizador:', error);
      });
  }


}