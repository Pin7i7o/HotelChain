import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CriarContaPageRoutingModule } from './criar-conta-routing.module';
import { CriarContaPage } from './criar-conta.page';
import { SupabaseService } from '../../services/Utilizadores.supabase.service'; // Import the SupabaseService



@NgModule({
  declarations: [CriarContaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarContaPageRoutingModule
  ],
  providers: [SupabaseService], // Add SupabaseService to the providers
  exports: [CriarContaPage] // If needed
  
})
export class CriarContaPageModule {}
