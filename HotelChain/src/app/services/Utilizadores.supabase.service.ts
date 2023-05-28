import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Utilizadores } from './Utilizadores';

@Injectable({
  providedIn: 'root'
})

export class SupabaseService {

  private supabaseUrl = 'https://vmdiooaeagiwvztkoqqq.supabase.co'; // URL copiado no passo acima 
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtZGlvb2FlYWdpd3Z6dGtvcXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMzcyOTYsImV4cCI6MTk5OTkxMzI5Nn0.C2tfVTCmxalsdAM6QDr0Q-pv3JStyz34QxjWaP4HZ74'; // anon public copiada no passo acima;
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(this.supabaseUrl, this.supabaseKey);
   }

   async getUtilizadores(): Promise<Utilizadores[]> {
    const { data, error } = await this.supabaseClient
      .from('Utilizadores')
      .select('*')

    if (error) {
      return [];
    }

    return data as Utilizadores[];
  }

  async getUtilizadorById(id: number): Promise<Utilizadores> {
    const { data, error } = await this.supabaseClient
      .from('utilizadores')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Utilizadores;
  }

  async insertUtilizador(utilizador: Utilizadores) {
    const { data, error } = await this.supabaseClient
      .from('utilizadores')
      .insert(utilizador)
      .single();

    if (error) {
      return null;
    }
    return data;
  }

  async updateUtilizador(utilizador: Utilizadores): Promise<void> {
    const { data, error } = await this.supabaseClient
      .from('utilizadores')
      .update({
        email: utilizador.email,
        contacto: utilizador.contacto,
        data_nascimento: utilizador.data_nascimento,
        genero: utilizador.genero,
        username: utilizador.username,
        password: utilizador.password
      })
      .eq('id', utilizador.id);

    if (error) {
      console.error(error);
      throw new Error('Erro ao atualizar utilizador');
    }
  }

  async deleteUtilizador(id: number): Promise<void> {
    await this.supabaseClient.from('utilizadores').delete().eq('id', id);
  }
}

