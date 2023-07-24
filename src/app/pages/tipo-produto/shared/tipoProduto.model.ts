export class TipoProduto {
  id: BigInt;
  nome: string;
  tipo_id: number;
  created_at?: string | null;
  updated_at?: string | null;

  constructor(
    id: BigInt,
    nome: string,
    tipo_id: number,
    created_at?: string | null,
    updated_at?: string | null
  ) {
    this.id = id;
    this.nome = nome;
    this.tipo_id = tipo_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
