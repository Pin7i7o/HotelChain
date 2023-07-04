import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Alerta {
  id: number;
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
    this.init(); // Call the initialization method when the service is created
  }

  async init() {
    const storage = await this.storage.create(); // Create the storage instance
    const alertas = await storage.get('alertas'); // Retrieve alertas from storage
    if (alertas) {
      this.alertas = alertas; // If alertas exist in storage, assign them to the service's alertas array
    } else {
      this.defaultAlerts(); // If alertas don't exist in storage, set default alertas
    }
  }

  getAlertas(): Alerta[] {
    return this.alertas; // Return the alertas array
  }

  async defaultAlerts() {
    const defaultAlerts: Alerta[] = [
      // Define default alertas
      {
        id: 1,
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
        id: 2,
        user: 'guest',
        data: new Date(),
        descricao: 'Frigorífico Desligado',
        prioridade: 'Alta',
        tipo: 'Manutencao',
        infraestrutura: 322,
        equipamento: 945,
        controlo: 'Temp',
        concluido: false 
      },
      {
        id: 3,
        user: 'guest',
        data: new Date(),
        descricao: 'Televisão Ligada',
        prioridade: 'Baixa',
        tipo: 'Manutencao',
        infraestrutura: 101,
        equipamento: 2150,
        controlo: 'Vol',
        concluido: false 
      },
      {
        id: 4,
        user: 'guest',
        data: new Date(),
        descricao: 'Novo Sensor Adicionado',
        prioridade: 'Alta',
        tipo: 'Sensor',
        infraestrutura: 120,
        equipamento: 654,
        controlo: 'Vol',
        concluido: false
      },
      {
        id: 5,
        user: 'guest',
        data: new Date(),
        descricao: 'Chuveiro com uma fuga',
        prioridade: 'Alta',
        tipo: 'Manutencao',
        infraestrutura: 488,
        equipamento: 2469,
        controlo: 'None',
        concluido: false
      }
    ];

    this.alertas = defaultAlerts; // Assign default alertas to the service's alertas array

    await this.storage?.set('alertas', defaultAlerts); // Store default alertas in storage
  }

  async deleteAlert(id: number) {
    const index = this.alertas.findIndex(a => a.id === id); // Find the index of the alerta with the given id
    if (index >= 0) {
      this.alertas.splice(index, 1); // Remove the alerta from the alertas array
      await this.storage.set('alertas', this.alertas); // Update the alertas stored in storage
    }
  }
}

