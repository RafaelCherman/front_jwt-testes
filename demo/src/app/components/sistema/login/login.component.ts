import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  login: Usuario = new Usuario();
  roteador = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {


    this.loginService.logar(this.login).subscribe({
      next: user => { // QUANDO DÁ CERTO
        console.log(user);
        this.loginService.addToken(user.token);
        if(this.loginService.hasPermission(user.token))
        {
          this.roteador.navigate(['admin/pedidos']);
        }
        else
        {
          this.roteador.navigate(['user/pedidos']);
        }
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }
}
