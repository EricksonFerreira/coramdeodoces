import { VendaEncomenda } from "./vendaEncomenda.model";

export class VendaEncomendaRequest{
  current_page: number;
  data: Array<VendaEncomenda>
  last_page: number;
  per_page?: number;
  total?: number;

  constructor(
    current_page: number,
    data: Array<VendaEncomenda>,
    last_page: number,
    per_page?: number,
    total?: number
  ) {
    this.current_page = current_page;
    this.data = data;
    this.last_page = last_page;
    this.per_page = per_page;
    this.total = total;
  }}
