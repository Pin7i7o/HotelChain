import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Alerta {
  id : number;
  user: string;
  data: Date;
  descricao: string;
  prioridade: string;
  tipo: string;
  infraestrutura: number;
  equipamento: number;
  controlo: string;
  concluido: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertsServiceService {

  private alertas: Alerta[];

  constructor(private storage: Storage) { 
    this.alertas = [];
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    const alertas = await storage.get('alertas');
    if (alertas) {
      this.alertas = alertas;
    } else {
      this.defaultAlerts();
    }
  }

  getAlertas(): Alerta[] {
    return this.alertas
  }

  async defaultAlerts() {
    const defaultAlerts: Alerta[] = [
      { 
        id : 1,
        user: 'guest', 
        data: new Date(), 
        descricao: 'Novo Sensor Adicionado', 
        prioridade: 'Alta', 
        tipo: 'Sensor', 
        infraestrutura: 258,
        equipamento: 1298,
        controlo: 'Temp',
        concluido: false 
      },
      { 
        id : 2,
        user: 'guest', 
        data: new Date(), 
        descricao: 'Frigorífico Desligado', 
        prioridade: 'Alta', 
        tipo: 'Manutencao', 
        infraestrutura: 322,
        equipamento: 945,
        controlo: 'Vol',
        concluido: false 
      },
      { 
        id : 3,
        user: 'guest', 
        data: new Date(), 
        descricao: 'Televisão Ligada', 
        prioridade: 'Baixa', 
        tipo: 'Manutencao', 
        infraestrutura: 101,
        equipamento: 2150,
        controlo: 'Temp',
        concluido: false 
      },
      { 
        id : 4,
        user: 'guest', 
        data: new Date(), 
        descricao: 'Novo Sensor Adicionado', 
        prioridade: 'Alta', 
        tipo: 'Sensor', 
        infraestrutura: 120,
        equipamento: 654,
        controlo: 'Vol',
        concluido: false 
      }
    ]

    this.alertas = defaultAlerts;

    await this.storage?.set('alertas', defaultAlerts);
  }

  async deleteAlert(id: number) {
    const index = this.alertas.findIndex(a => a.id === id);
    if (index >= 0) {
        this.alertas.splice(index, 1);
        await this.storage.set('alertas', this.alertas);
    }
}
}
