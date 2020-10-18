import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeexampleComponent } from './seeexample.component';

describe('SeeexampleComponent', () => {
  let component: SeeexampleComponent;
  let fixture: ComponentFixture<SeeexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
