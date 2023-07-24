import { User } from "./user.model"

export class Token{
  access_token:string
  token_type:string
  expires_in:string
  user:User

  constructor(access_token:string,token_type:string,expires_in:string,user:User){
    this.access_token= access_token,
    this.token_type = token_type
    this.expires_in = expires_in
    this.user = user
  }
}
