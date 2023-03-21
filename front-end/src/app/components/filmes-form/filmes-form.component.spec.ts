import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesFormComponent } from './filmes-form.component';

describe('FilmesFormComponent', () => {
  let component: FilmesFormComponent;
  let fixture: ComponentFixture<FilmesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
