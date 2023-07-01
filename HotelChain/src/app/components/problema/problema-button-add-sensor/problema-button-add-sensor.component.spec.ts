import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemaButtonAddSensorComponent } from './problema-button-add-sensor.component';

describe('ProblemaButtonAddSensorComponent', () => {
  let component: ProblemaButtonAddSensorComponent;
  let fixture: ComponentFixture<ProblemaButtonAddSensorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemaButtonAddSensorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemaButtonAddSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
