export class JwtAutResponse {
    authenticationToken: string;
    username: string
    constructor(authenticationToken:string, username:string)
    {
      this.authenticationToken=authenticationToken;
      this.username=username;
    }
  }
  