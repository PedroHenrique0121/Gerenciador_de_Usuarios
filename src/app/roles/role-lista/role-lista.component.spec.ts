import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleListaComponent } from './role-lista.component';

describe('RoleListaComponent', () => {
  let component: RoleListaComponent;
  let fixture: ComponentFixture<RoleListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
