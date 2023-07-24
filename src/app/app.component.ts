import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'adminlte';
  menuClosed = false;
  estaLogado:boolean|undefined = false;

  constructor(public authService: AuthService) { }

  ngOnInit(){
    this.isLogado();
  }
  ngDoCheck(){
    this.isLogado();
  }

  reciverFeedback(respostaFilho:any) {
    this.menuClosed = respostaFilho;
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

  isLogado(){
    this.estaLogado =  this.authService.isLoggedIn;
  }
}
