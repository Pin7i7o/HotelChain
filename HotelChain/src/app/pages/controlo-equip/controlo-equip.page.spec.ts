import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControloEquipPage } from './controlo-equip.page';

describe('ControloEquipPage', () => {
  let component: ControloEquipPage;
  let fixture: ComponentFixture<ControloEquipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControloEquipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
