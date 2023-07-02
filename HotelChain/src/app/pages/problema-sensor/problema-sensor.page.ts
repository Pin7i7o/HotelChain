import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from '../../services/alerts-service.service';

@Component({
  selector: 'app-problema',
  templateUrl: './problema-sensor.page.html',
  styleUrls: ['./problema-sensor.page.scss'],
})

export class ProblemaSensorPage implements OnInit {
  alerta: Alerta | null = null;

  constructor(private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.queryParams.subscribe((params) => {
      this.alerta = params as Alerta;
    });
  }

  goToEquipmentPage() {
    this.router.navigate(['//controlo-equip'], { queryParams: this.alerta });
  }

}
