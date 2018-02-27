import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnoteComponent } from './enote.component';

describe('EnoteComponent', () => {
  let component: EnoteComponent;
  let fixture: ComponentFixture<EnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
