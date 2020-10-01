import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBrowserComponent } from './icon-browser.component';

describe('IconBrowserComponent', () => {
  let component: IconBrowserComponent;
  let fixture: ComponentFixture<IconBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
