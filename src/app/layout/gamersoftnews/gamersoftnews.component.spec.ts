import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersoftnewsComponent } from './gamersoftnews.component';

describe('GamersoftnewsComponent', () => {
  let component: GamersoftnewsComponent;
  let fixture: ComponentFixture<GamersoftnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamersoftnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamersoftnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
