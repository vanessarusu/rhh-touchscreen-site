import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBuilderComponent } from './the-builder.component';

describe('TheBuilderComponent', () => {
  let component: TheBuilderComponent;
  let fixture: ComponentFixture<TheBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
