import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.page.html',
  styleUrls: ['./instrucoes.page.scss'],
})
export class InstrucoesPage {
  showCardContent: string | null = null;

  constructor(private router: Router) { }

  toggleCardContent(cardId: string) {
    this.showCardContent = this.showCardContent === cardId ? null : cardId;
  }

  editCard(event: MouseEvent) {
    // Lógica de edição do card
  }

  enviarDados() {
    // Lógica de envio dos dados
  }

  voltarParaHome() {
    this.router.navigate(['/home']);
  }
}





