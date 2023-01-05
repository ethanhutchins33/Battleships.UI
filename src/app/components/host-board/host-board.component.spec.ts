import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBoardComponent } from './host-board.component';

describe('HostBoardComponent', () => {
  let component: HostBoardComponent;
  let fixture: ComponentFixture<HostBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
