import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IupcComponent } from './iupc.component';

describe('IupcComponent', () => {
  let component: IupcComponent;
  let fixture: ComponentFixture<IupcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IupcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IupcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
