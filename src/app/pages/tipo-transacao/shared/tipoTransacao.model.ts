export class TipoTransacao{
  id:BigInt
  nome:string
  cor:string

  constructor(id:BigInt,nome:string,cor:string){
    this.id = id,
    this.nome = nome,
    this.cor = cor
  }
}
