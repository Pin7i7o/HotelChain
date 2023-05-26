import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { TipoAlerta } from './TipoAlerta';

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

}