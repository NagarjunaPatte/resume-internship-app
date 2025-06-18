import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills } from './skills';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
