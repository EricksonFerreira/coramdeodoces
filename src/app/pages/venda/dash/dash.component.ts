import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  vendas_faculdade = 100;
  vendas_empresa = 80;
  vendas_terceirizado = 130;
  vendas_encomenda = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
