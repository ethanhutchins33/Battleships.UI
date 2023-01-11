import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCellComponent } from './host-cell.component';

describe('HostCellComponent', () => {
  let component: HostCellComponent;
  let fixture: ComponentFixture<HostCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
