import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosdetailsComponent } from './produtosdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let produto: Produto = new Produto;
    produto.nome = "coca-cola";
    produto.valor = 5;
    produto.id = 1;
    component.produto = produto;
    fixture.detectChanges();
  });

  it('Teste 1 @Input Produto Nome', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(valorElemento.nativeElement.ngModel).toEqual("coca-cola");
  })

  it('Teste 2 @Input Produto Nome', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(valorElemento.nativeElement.ngModel).not.toBe(null);
  })

  it('Teste 3 @Input Produto Valor', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(valorElemento.nativeElement.ngModel).toEqual(5);
  })

  it('Teste 4 @Input Produto Valor', () => {
    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(valorElemento.nativeElement.ngModel).not.toBe(null);
  })
});
