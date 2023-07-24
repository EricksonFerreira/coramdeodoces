export class HistoricoPreco {
  id: BigInt;
  valor: string;
  ativo: number;
  usuatu?: string | null;
  data_atu?: string | null;
  created_at?: string | null;
  updated_at?: string | null;

  constructor(
    id: BigInt,
    valor: string,
    ativo: number,
    usuatu?: string | null,
    data_atu?: string | null,
    created_at?: string | null,
    updated_at?: string | null

  ) {
    this.id = id;
    this.valor = valor;
    this.ativo = ativo;
    this.usuatu = usuatu;
    this.data_atu = data_atu;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
