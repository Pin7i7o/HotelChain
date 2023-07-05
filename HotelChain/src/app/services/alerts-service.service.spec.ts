import { TestBed } from '@angular/core/testing';

import { AlertsServiceService } from './alerts-service.service';

describe('AlertsServiceService', () => {
  let service: AlertsServiceService;

  
  beforeEach(() => {
    // Configuração do teste
    TestBed.configureTestingModule({});

     // Injeção do serviço
    service = TestBed.inject(AlertsServiceService);
  });

  it('should be created', () => {
    // Verifica se o serviço foi criado com sucesso
    expect(service).toBeTruthy();
  });
});
