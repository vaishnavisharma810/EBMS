export class Bills{
    bill_no! : number;
    consumer_no! : number;
    presentReading! : number;
    previousReading! : number;
    currentBillDate! : Date;
    previousBillDate! : Date;
    dueDate! : Date;
    amountToPay! : number;

    constructor(consumer_no : number, presentReading : number, previousReading : number, previousBillDate : Date){
        this.consumer_no = consumer_no;
        this.presentReading = presentReading;
        this.currentBillDate = new Date();
        this.previousBillDate = previousBillDate;
        
    }

    
  }
  