import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAndAdviceComponent } from './info-and-advice.component';

describe('InfoAndAdviceComponent', () => {
  let component: InfoAndAdviceComponent;
  let fixture: ComponentFixture<InfoAndAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAndAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAndAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
