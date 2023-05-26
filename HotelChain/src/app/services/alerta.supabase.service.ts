import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Alertas } from './alerta';

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

   async getAlertas(): Promise<Alertas[]> {
    const { data, error } = await this.supabaseClient
      .from('Alerta')
      .select('*');
  
    if (error) {
      return [];
    }
  
    return data as Alertas[];
  }

  async getAlertasById(id: number): Promise<Alertas> {
    const { data, error } = await this.supabaseClient
      .from('Alerta')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Alertas;
  }

  async insertAlerta(alerta: Alertas) {
    const { data, error } = await this.supabaseClient
      .from('Alerta')
      .insert(alerta)
      .single();
  
    if (error) {
      return null;
    }
    return data;
  }

  async deleteAlerta(id: number): Promise<void> {
    await this.supabaseClient.from('Alerta').delete().eq('id', id);
  }  
}
