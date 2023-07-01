import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemaButtonCallEmployeesComponent } from './problema-button-call-employees.component';

describe('ProblemaButtonCallEmployeesComponent', () => {
  let component: ProblemaButtonCallEmployeesComponent;
  let fixture: ComponentFixture<ProblemaButtonCallEmployeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemaButtonCallEmployeesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemaButtonCallEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
