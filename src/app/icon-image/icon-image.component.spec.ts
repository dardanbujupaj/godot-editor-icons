import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconImageComponent } from './icon-image.component';

describe('IconImageComponent', () => {
  let component: IconImageComponent;
  let fixture: ComponentFixture<IconImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
