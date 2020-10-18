import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgenaratorComponent } from './mgenarator.component';

describe('MgenaratorComponent', () => {
  let component: MgenaratorComponent;
  let fixture: ComponentFixture<MgenaratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgenaratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgenaratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
