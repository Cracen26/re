import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssListingComponent } from './rss-listing.component';

describe('RssListingComponent', () => {
  let component: RssListingComponent;
  let fixture: ComponentFixture<RssListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RssListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RssListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
