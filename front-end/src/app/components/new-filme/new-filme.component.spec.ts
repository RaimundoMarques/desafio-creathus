import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilmeComponent } from './new-filme.component';

describe('NewFilmeComponent', () => {
  let component: NewFilmeComponent;
  let fixture: ComponentFixture<NewFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
