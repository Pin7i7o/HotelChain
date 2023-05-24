import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarContaInfoPage } from './criar-conta-info.page';

describe('CriarContaInfoPage', () => {
  let component: CriarContaInfoPage;
  let fixture: ComponentFixture<CriarContaInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriarContaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
