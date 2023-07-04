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
        this.floor = '/assets/mapa/3andar.jpeg';
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
        8- Quarto 5 estrelas`;
          break;
      default:
        this.floor = '/assets/icons/interrogação.png';
        this.caption = 'Piso inexistente';
        break;
    }
  }

  updateImages(option: string) {
    let floorImagePath = '';
    let floorCaption = '';
  
    switch (this.floorNumber) {
      case 1:
        if (option === 'Infraestrutura') {
          floorImagePath = '/assets/mapa/2andar-infraestrutura.jpg';
          floorCaption = `9- Sala de arrumações<br>
          10- Quarto econômico<br>
          11- Quartos comuns<br>
          12- Sala com máquinas de comida<br>
          13- Lavandaria comunitária<br>
          14- Sala de convívio<br>
          15- Quarto 5 estrelas<br>
          16- Ginásio`;
        } else if (option === 'Sensores') {
          floorImagePath = '/assets/mapa/2andar-sensores.jpg';
          floorCaption = `9- Sala de arrumações<br>
          10- Quarto econômico<br>
          11- Quartos comuns<br>
          12- Sala com máquinas de comida<br>
          13- Lavandaria comunitária<br>
          14- Sala de convívio<br>
          15- Quarto 5 estrelas<br>
          16- Ginásio`;
        } else if (option === 'Equipamentos') {
          floorImagePath = '/assets/mapa/2andar-equipamentos.jpg';
          floorCaption = `9- Sala de arrumações<br>
          10- Quarto econômico<br>
          11- Quartos comuns<br>
          12- Sala com máquinas de comida<br>
          13- Lavandaria comunitária<br>
          14- Sala de convívio<br>
          15- Quarto 5 estrelas<br>
          16- Ginásio`;
        }
        break;
      case 2:
        if (option === 'Infraestrutura') {
          floorImagePath = '/assets/mapa/3andar-infraestruturas.jpg';
          floorCaption = `17- Sala de arrumações<br>
          18- Quartos comuns<br>
          19- Quarto economico<br>
          20- Mini bar<br>
          21- Sala infantil<br>
          22- Sala com maquinas de comida<br>
          23- Sala de convivio<br>
          24- Quarto 5 estrelas<br>
          25- Varanda com jacuzzi`;
        } else if (option === 'Sensores') {
          floorImagePath = '/assets/mapa/3andar-sensores.jpg';
          floorCaption = `17- Sala de arrumações<br>
          18- Quartos comuns<br>
          19- Quarto economico<br>
          20- Mini bar<br>
          21- Sala infantil<br>
          22- Sala com maquinas de comida<br>
          23- Sala de convivio<br>
          24- Quarto 5 estrelas<br>
          25- Varanda com jacuzzi`;
        } else if (option === 'Equipamentos') {
          floorImagePath = '/assets/mapa/3andar- equipamentos.jpg';
          floorCaption = `17- Sala de arrumações<br>
          18- Quartos comuns<br>
          19- Quarto economico<br>
          20- Mini bar<br>
          21- Sala infantil<br>
          22- Sala com maquinas de comida<br>
          23- Sala de convivio<br>
          24- Quarto 5 estrelas<br>
          25- Varanda com jacuzzi`;
        }
        break;
      case 0:
        if (option === 'Infraestrutura') {
          floorImagePath = '/assets/mapa/1andar-infraestrutura.jpg';
          floorCaption = `1- Receção<br>
          2- Sala de arrumações<br>
          3- Quarto econômico<br>
          4- Piscina interior<br>
          5- Balneários<br>
          6- Bar<br>
          7- Refeitório<br>
          8- Quarto 5 estrelas`;
        } else if (option === 'Sensores') {
          floorImagePath = '/assets/mapa/1andar-sensores.jpg';
          floorCaption = `1- Receção<br>
          2- Sala de arrumações<br>
          3- Quarto econômico<br>
          4- Piscina interior<br>
          5- Balneários<br>
          6- Bar<br>
          7- Refeitório<br>
          8- Quarto 5 estrelas`;
        } else if (option === 'Equipamentos') {
          floorImagePath = '/assets/mapa/1andar-equipamentos.jpg';
          floorCaption = `1- Receção<br>
          2- Sala de arrumações<br>
          3- Quarto econômico<br>
          4- Piscina interior<br>
          5- Balneários<br>
          6- Bar<br>
          7- Refeitório<br>
          8- Quarto 5 estrelas`;
        }
        break;
      default:
        floorImagePath = '/assets/icons/interrogacao.png';
        floorCaption = 'piso inexistente';
        break;
    }
  
    this.floor = floorImagePath;
    this.caption = floorCaption;
  }
  
}
