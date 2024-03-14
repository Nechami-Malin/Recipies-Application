import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRecipeComponent } from './one-recipe.component';

describe('OneRecipeComponent', () => {
  let component: OneRecipeComponent;
  let fixture: ComponentFixture<OneRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
