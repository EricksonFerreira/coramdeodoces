export class Usuario {
  id: BigInt;
  nome: string;
  email: string;

  constructor(id: BigInt, nome: string,email:string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}
