import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/admin/header/header.component';
import { FooterComponent } from './components/layout/admin/footer/footer.component';
import { IndexComponent } from './components/layout/admin/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { PedidosdetailsComponent } from './components/pedidos/pedidosdetails/pedidosdetails.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { ProdutosdetailsComponent } from './components/produtos/produtosdetails/produtosdetails.component';
import { httpInterceptorProviders } from './interceptors/httpinterceptor.service';
import { HeaderComponentUser } from './components/layout/user/header/header.component';
import { FooterComponentUser } from './components/layout/user/footer/footer.component';
import { IndexComponentUser } from './components/layout/user/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    HeaderComponentUser,
    FooterComponentUser,
    IndexComponentUser,
    LoginComponent,
    PedidoslistComponent,
    PedidosdetailsComponent,
    ProdutoslistComponent,
    ProdutosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
