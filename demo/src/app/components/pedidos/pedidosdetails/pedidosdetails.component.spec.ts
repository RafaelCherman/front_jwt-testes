import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosdetailsComponent } from './pedidosdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pedido } from 'src/app/models/pedido';
import { By } from '@angular/platform-browser';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let pedido: Pedido = new Pedido;
    pedido.obs = "pedido";
    component.pedido = pedido;
    fixture.detectChanges();
  });

  it('Teste 1 @Input Produto Obs', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(valorElemento.nativeElement.ngModel).toEqual("pedido");
  })

  it('Teste 2 @Input Produto Obs', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(valorElemento.nativeElement.ngModel).not.toBe(null);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
