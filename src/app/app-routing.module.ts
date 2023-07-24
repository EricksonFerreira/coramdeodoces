import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { NoAuthGuard } from './shared/guard/noAuth.guard';

const routes: Routes = [
  { path: 'cliente', loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule), canActivate: [AuthGuard] },
  { path: 'tipoproduto', loadChildren: () => import('./pages/tipo-produto/tipo-produto.module').then(m => m.TipoProdutoModule), canActivate: [AuthGuard] },
  { path: 'produtos', loadChildren: () => import('./pages/produtos/produtos.module').then(m => m.ProdutosModule), canActivate: [AuthGuard] },
  { path: 'tipoacao', loadChildren: () => import('./pages/tipo-acao/tipo-acao.module').then(m => m.TipoAcaoModule), canActivate: [AuthGuard] },
  { path: 'tipotransacao', loadChildren: () => import('./pages/tipo-transacao/tipo-transacao.module').then(m => m.TipoTransacaoModule), canActivate: [AuthGuard] },
  { path: 'vendedores', loadChildren: () => import('./pages/vendedor/vendedor.module').then(m => m.VendedorModule), canActivate: [AuthGuard] },
  { path: 'venda/encomenda', loadChildren: () => import('./pages/vendas-encomenda/vendas-encomenda.module').then(m => m.VendasEncomendaModule), canActivate: [AuthGuard] },
  { path: 'venda/empresa', loadChildren: () => import('./pages/vendas-empresa/vendas-empresa.module').then(m => m.VendasEmpresaModule), canActivate: [AuthGuard] },
  { path: 'venda', loadChildren: () => import('./pages/venda/venda.module').then(m => m.VendaModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'venda', pathMatch: 'full'},
  { path: 'usuarios', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule), canActivate: [AuthGuard] },

  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule), canActivate: [NoAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
