export class Login{
  id:BigInt
  email:string
  senha:string

  constructor(id:BigInt,  email:string,senha:string){
    this.id = id,
    this.email = email
    this.senha= senha
  }
}
