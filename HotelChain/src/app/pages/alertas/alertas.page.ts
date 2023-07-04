import { Component, OnInit } from '@angular/core';
import { Alerta, AlertsServiceService } from '../../services/alerts-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  alertas: Alerta[] = []; // Declare an array variable named 'alertas' of type 'Alerta' and initialize it as an empty array
  altaAlertas: Alerta[] = []; // Declare an array variable named 'altaAlertas' of type 'Alerta' and initialize it as an empty array
  baixaAlertas: Alerta[] = []; // Declare an array variable named 'baixaAlertas' of type 'Alerta' and initialize it as an empty array
  sortedAlertas: Alerta[] = []; // Declare an array variable named 'sortedAlertas' of type 'Alerta' and initialize it as an empty array
  selectedPriority: string = ''; // Declare a string variable named 'selectedPriority' and initialize it as an empty string

  constructor(private alertService: AlertsServiceService, private router: Router) { }

  async ngOnInit() {
    await this.alertService.init(); // Call the 'init' method of the 'alertService' object asynchronously
    this.alertas = this.alertService.getAlertas(); // Assign the value of 'getAlertas' method from the 'alertService' object to the 'alertas' variable
    this.alertas.forEach(a => {
      if (a.prioridade === 'Baixa') {
        this.baixaAlertas.push(a); // Push the alerta into the 'baixaAlertas' array if its priority is 'Baixa'
      } else if (a.prioridade === 'Alta') {
        this.altaAlertas.push(a); // Push the alerta into the 'altaAlertas' array if its priority is 'Alta'
      }
    });
  }

  async deleteAlerta(alerta: Alerta) {
    await this.alertService.deleteAlert(alerta.id); // Call the 'deleteAlert' method of the 'alertService' object asynchronously with the 'id' of the alerta to be deleted
  }

  getIcon(alerta: Alerta): string {
    switch (alerta.tipo) {
      case 'Sensor':
        return 'help-circle-outline'; // Return the icon name 'help-circle-outline' if the alerta type is 'Sensor'
      case 'Manutencao':
        return 'hammer'; // Return the icon name 'hammer' if the alerta type is 'Manutencao'
      default:
        return ''; // Return an empty string if the alerta type is neither 'Sensor' nor 'Manutencao'
    }
  }

  sortAlertas() {
    let sortedArray: Array<Alerta> = []; // Declare a new array variable named 'sortedArray' of type 'Alerta' and initialize it as an empty array

    if (this.selectedPriority === 'Baixa') {
      this.baixaAlertas.forEach(a => {
        sortedArray.push(a); // Push each alerta from 'baixaAlertas' array into the 'sortedArray'
      });
      this.altaAlertas.forEach(a => {
        sortedArray.push(a); // Push each alerta from 'altaAlertas' array into the 'sortedArray'
      });
      this.alertas = sortedArray; // Assign the sorted array to the 'alertas' array

    } else if (this.selectedPriority === 'Alta') {
      this.altaAlertas.forEach(a => {
        sortedArray.push(a); // Push each alerta from 'altaAlertas' array into the 'sortedArray'
      });
      this.baixaAlertas.forEach(a => {
        sortedArray.push(a); // Push each alerta from 'baixaAlertas' array into the 'sortedArray'
      });
      this.alertas = sortedArray; // Assign the sorted array to the 'alertas' array

    } else {
      this.alertas = this.alertService.getAlertas(); // If no priority is selected, assign the unsorted 'alertas' array from 'alertService' to the 'alertas' variable
    }
  }

  goToAlertaDetailsPage(alerta: Alerta) {
    this.router.navigate(['/problema'], { queryParams: alerta }); // Navigate to the '/problema' route with the alerta as a query parameter
  }

}

