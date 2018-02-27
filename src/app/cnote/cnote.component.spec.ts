import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnoteComponent } from './cnote.component';

describe('CnoteComponent', () => {
  let component: CnoteComponent;
  let fixture: ComponentFixture<CnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
