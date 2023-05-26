import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-conta-info',
  templateUrl: './criar-conta-info.page.html',
  styleUrls: ['./criar-conta-info.page.scss'],
})
export class CriarContaInfoPage implements OnInit {

  showList: boolean = false;
  selectedGender: string | null = null;
  

  constructor() { }

  ngOnInit() {
  }

}
