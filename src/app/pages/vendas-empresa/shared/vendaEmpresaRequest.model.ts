import { VendaEmpresa } from "./vendaEmpresa.model";

export class VendaEmpresaRequest{
  current_page: number;
  data: Array<VendaEmpresa>
  last_page: number;
  per_page?: number;
  total?: number;

  constructor(
    current_page: number,
    data: Array<VendaEmpresa>,
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
