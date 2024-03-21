import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { recipeGuard } from './recipe.guard';

describe('recipeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => recipeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
