import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPizzas } from './listado-pizzas';

describe('ListadoPizzas', () => {
  let component: ListadoPizzas;
  let fixture: ComponentFixture<ListadoPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
