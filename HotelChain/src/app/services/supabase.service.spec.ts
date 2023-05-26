import { TestBed } from '@angular/core/testing';

import { SupabaseService as AlertaSupabaseService } from './alerta.supabase.service';
import { SupabaseService as ContasSupabaseService } from './Contas.supabase.service';
import { SupabaseService as EquipamentoSupabaseService } from './Equipamento.supabase.service';
import { SupabaseService as InfraestruturasSupabaseService } from './Infraestruturas.supabase.service';
import { SupabaseService as PrioridadeSupabaseService } from './Prioridade.supabase.service';
import { SupabaseService as TipoAlertaSupabaseService } from './TipoAlerta.supabase.service';
import { SupabaseService as UtilizadoresSupabaseService } from './Utilizadores.supabase.service';

describe('SupabaseService', () => {
  let alertaService: AlertaSupabaseService;
  let contasService: ContasSupabaseService;
  let equipamentoService: EquipamentoSupabaseService;
  let infraestruturasService: InfraestruturasSupabaseService;
  let prioridadeService: PrioridadeSupabaseService;
  let tipoAlertaService: TipoAlertaSupabaseService;
  let utilizadoresService: UtilizadoresSupabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    alertaService = TestBed.inject(AlertaSupabaseService);
    contasService = TestBed.inject(ContasSupabaseService);
    equipamentoService = TestBed.inject(EquipamentoSupabaseService);
    infraestruturasService = TestBed.inject(InfraestruturasSupabaseService);
    prioridadeService = TestBed.inject(PrioridadeSupabaseService);
    tipoAlertaService = TestBed.inject(TipoAlertaSupabaseService);
    utilizadoresService = TestBed.inject(UtilizadoresSupabaseService);
  });

  it('should be created', () => {
    expect(alertaService).toBeTruthy();
    expect(contasService).toBeTruthy();
    expect(equipamentoService).toBeTruthy();
    expect(infraestruturasService).toBeTruthy();
    expect(prioridadeService).toBeTruthy();
    expect(tipoAlertaService).toBeTruthy();
    expect(utilizadoresService).toBeTruthy();
  });
});

