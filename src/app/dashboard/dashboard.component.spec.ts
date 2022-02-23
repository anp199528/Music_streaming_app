import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioappComponent } from './dashboard.component';

describe('AudioappComponent', () => {
  let component: AudioappComponent;
  let fixture: ComponentFixture<AudioappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
