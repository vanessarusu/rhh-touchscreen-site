import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCommunityComponent } from './the-community.component';

describe('TheCommunityComponent', () => {
  let component: TheCommunityComponent;
  let fixture: ComponentFixture<TheCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
