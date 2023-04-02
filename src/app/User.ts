//Class with all user details

export class User {
  consumerNumber! : number;
  meterNo!: number;
  email!: string;
  fullName! : string;
  address! : string;
  mobile! : number;

  constructor(
    consumerNo : number,
    meterNo : number,
    email : string,
    fullName : string,
    address : string,
    mobile : number
    ) {
      this.consumerNumber = consumerNo;
      this.meterNo = meterNo;
      this.email = email;
      this.fullName = fullName;
      this.address = address;
      this.mobile = mobile;
    }
    
  static fromJSON(json : any) : User {
    return new User(
      json.consumerNumber,
      json.meterNo,
      json.email,
      json.fullName,
      json.address,
      json.mobile
    );
  }  
}