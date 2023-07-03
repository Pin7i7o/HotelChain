import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstrucoesPage } from './instrucoes.page';

describe('InstrucoesPage', () => {
  let component: InstrucoesPage;
  let fixture: ComponentFixture<InstrucoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstrucoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
