import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async login(username: string, password: string): Promise<boolean> {
    // Verificar se as credenciais são as predefinidas
    if (username === 'guest' && password === 'password') {
      await this._storage?.set('username', username);
      this.router.navigateByUrl('/home');
      return true;
    } else {
      return false;
    }
  }

  async logout() {
    // Remover as informações do usuário do LocalStorage
    await this._storage?.remove('username');
  }

  async isAuthenticated(): Promise<boolean> {
    // Verificar se o usuário está autenticado
    const username = await this._storage?.get('username');
    return !!username; // Retorna true se o username existir e false caso contrário
  }
}
