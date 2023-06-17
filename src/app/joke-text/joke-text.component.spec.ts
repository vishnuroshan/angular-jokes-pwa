import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeTextComponent } from './joke-text.component';

describe('JokeTextComponent', () => {
  let component: JokeTextComponent;
  let fixture: ComponentFixture<JokeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
