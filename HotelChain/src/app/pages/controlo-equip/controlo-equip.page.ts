import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from '../../services/alerts-service.service';

@Component({
  selector: 'app-controlo-equip',
  templateUrl: './controlo-equip.page.html',
  styleUrls: ['./controlo-equip.page.scss'],
})
export class ControloEquipPage implements OnInit {
  alerta: Alerta | null = null; // Declare a variable named 'alerta' with type 'Alerta' or 'null' and initialize it as null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.alerta = params as Alerta; // Assign the value of 'params' to 'alerta', casting it as type 'Alerta'
    });
  }

}
