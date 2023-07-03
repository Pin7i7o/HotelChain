import { Component } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})
export class MapsPage {

  floorNumber: number = 0;
  floor: string = '/assets/icons/interrogação.png';
  caption: string;

  constructor(){
    this.floorNumber = 0;
    this.floor = '/assets/icons/interrogação.png';
    this.caption = '';
  }

  updateFloor() {
    switch (this.floorNumber) {
      case 1:
        this.floor = '/assets/mapa/2andar.jpg';
        this.caption = `9- Sala de arrumações<br>
        10- Quarto economico<br>
        11- Quartos comuns<br>
        12- Sala com maquinas de comida<br>
        13- Lavandaria comunitaria <br>
        14- Sala de convivio<br>
        15- Quarto 5 estrelas<br>
        16- Ginasio`;
        break;
      
      case 2:
        this.floor = '/assets/mapa/3andar.jpg';
        this.caption = `17- Sala de arrumações<br>
        18- Quartos comuns<br>
        19- Quarto economico<br>
        20- Mini bar<br>
        21- Sala infantil<br>
        22- Sala com maquinas de comida<br>
        23- Sala de convivio<br>
        24- Quarto 5 estrelas<br>
        25- Varanda com jacuzzi`;
        break;
      case 0:
        this.floor = '/assets/mapa/1andar.jpg';
        this.caption = `1- Receção<br>
        2- Sala de arrumações<br>
        3- Quarto econômico<br>
        4- Piscina interior<br>
        5- Balneários<br>
        6- Bar<br>
        7- Refeitório<br>
        8- Quarto 5 estrelas`;;
          break;
      default:
        this.floor = '/assets/icons/interrogacao.png';
        this.caption = 'Legenda desconhecida';
        break;
    }
  }
  
}
