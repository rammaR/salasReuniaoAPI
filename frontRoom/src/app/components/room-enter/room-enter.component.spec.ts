import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEnterComponent } from './room-enter.component';

describe('RoomEnterComponent', () => {
  let component: RoomEnterComponent;
  let fixture: ComponentFixture<RoomEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
