import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmeComponent } from './edit-filme.component';

describe('EditFilmeComponent', () => {
  let component: EditFilmeComponent;
  let fixture: ComponentFixture<EditFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
