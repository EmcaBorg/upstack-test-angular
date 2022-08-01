import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksGroupComponent } from './links-group.component';

describe('LinksGroupComponent', () => {
  let component: LinksGroupComponent;
  let fixture: ComponentFixture<LinksGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksGroupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinksGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
