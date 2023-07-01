import { Component, OnInit } from '@angular/core';
import {Alerta, AlertsServiceService} from '../../services/alerts-service.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  alertas: Alerta[] = [];
  altaAlertas: Alerta[] = [];
  baixaAlertas: Alerta[] = [];
  sortedAlertas: Alerta[] = [];
  selectedPriority: string = '';

  constructor(private alertService: AlertsServiceService) { }

  async ngOnInit() {
    await this.alertService.init();
    this.alertas = this.alertService.getAlertas();
    this.alertas.forEach(a => {
      if (a.prioridade === 'Baixa') {
        this.baixaAlertas.push(a);
      } else if (a.prioridade === 'Alta'){
        this.altaAlertas.push(a);
      }
    });
  }

  async deleteAlerta(alerta: Alerta) {
    await this.alertService.deleteAlert(alerta.id);
  }

  getIcon(alerta: Alerta): string{
    switch (alerta.tipo) {
      case 'Sensor':
        return 'help-circle-outline';
      case 'Manutencao':
        return 'hammer';
      default:
        return '';
    }
  }
  
  sortAlertas(){
  let sortedArray: Array<Alerta> = [];

  if(this.selectedPriority === 'Baixa'){
    this.baixaAlertas.forEach(a => {
      sortedArray.push(a);
    });
    this.altaAlertas.forEach(a => {
      sortedArray.push(a);
    });
    this.alertas = sortedArray;

    } else if(this.selectedPriority === 'Alta'){
      this.altaAlertas.forEach(a => {
        sortedArray.push(a);
      });
      this.baixaAlertas.forEach(a => {
        sortedArray.push(a);
      });
      this.alertas = sortedArray;

    } else{
      this.alertas = this.alertService.getAlertas();
    }
  }
  
}
