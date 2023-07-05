import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from '../../services/alerts-service.service';

@Component({
  selector: 'app-problema',
  templateUrl: './problema-sensor.page.html',
  styleUrls: ['./problema-sensor.page.scss'],
})

export class ProblemaSensorPage implements OnInit {
  // Variável para armazenar o objeto Alerta ou nulo
  alerta: Alerta | null = null;

  constructor(private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Obtém os parâmetros da rota atual
    this.acRoute.queryParams.subscribe((params) => {
      // Atribui os parâmetros ao objeto Alerta
      this.alerta = params as Alerta;
    });
  }

  // Método para navegar para a página de controle de equipamento
  goToEquipmentPage() {
    // Navega para a página 'controlo-equip' com o objeto Alerta como parâmetro de consulta
    this.router.navigate(['/controlo-equip'], { queryParams: this.alerta });
  }
}

