import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepFooterComponent } from './sep-footer.component';

describe('SepFooterComponent', () => {
  let component: SepFooterComponent;
  let fixture: ComponentFixture<SepFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
