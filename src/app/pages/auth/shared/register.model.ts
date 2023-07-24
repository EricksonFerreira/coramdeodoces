import { User } from "./user.model"

export class Register{
  result:boolean
  message:string
  user:User

  constructor(result:boolean,message:string,user:User){
    this.result= result,
    this.message = message
    this.user = user
  }
}
