import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProblemaSensorPage } from './problema-sensor.page';

describe('ProblemaPage', () => {
  let component: ProblemaSensorPage;
  let fixture: ComponentFixture<ProblemaSensorPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ProblemaSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
