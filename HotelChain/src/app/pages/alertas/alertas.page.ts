import { Component, OnInit } from '@angular/core';
import {Alerta, AlertsServiceService} from '../../services/alerts-service.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  alertas: Alerta[] = [];

  constructor(private alertService: AlertsServiceService) { }

  async ngOnInit() {
    await this.alertService.init();
    this.alertas = this.alertService.getAlertas();
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
}
