export class User{
  id:BigInt
  nome:string
  email:string
  created_at:string
  updated_at:string

  constructor(id:BigInt,nome:string,  email:string,senha:string,created_at:string,updated_at:string){
    this.id = id,
    this.nome = nome
    this.email = email
    this.created_at = created_at
    this.updated_at = updated_at
    }
}
