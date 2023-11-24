import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/admin/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { rotaguardGuard } from './guards/rotaguard.guard';
import { IndexComponentUser } from './components/layout/user/index/index.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], children: [
      { path: "produtos", component: ProdutoslistComponent },
      { path: "pedidos", component: PedidoslistComponent },
    ]
  },
  {
    path: "user", component: IndexComponentUser, canActivate: [rotaguardGuard], children: [
      { path: "produtos", component: ProdutoslistComponent },
      { path: "pedidos", component: PedidoslistComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
