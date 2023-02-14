import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEdicaoComponent } from './role-edicao.component';

describe('RoleEdicaoComponent', () => {
  let component: RoleEdicaoComponent;
  let fixture: ComponentFixture<RoleEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
