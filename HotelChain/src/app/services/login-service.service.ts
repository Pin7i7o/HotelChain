import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
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
      return true;
    } else {
      return false;
    }
  }

  async getUser(): Promise<string>{
    return this._storage?.get('username') || '';
  }

  async logout() {
    // Remover as informações do usuário do LocalStorage
    await this._storage?.remove('username');
  }
}
