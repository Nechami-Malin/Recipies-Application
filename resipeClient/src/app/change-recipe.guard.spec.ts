import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { changeRecipeGuard } from './change-recipe.guard';

describe('changeRecipeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => changeRecipeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
