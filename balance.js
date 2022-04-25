    function Account(amount){
    this.balance = amount;
    this.withdrawal = withdrawal;
    this.deposit = deposit;
    this.print = print;
}
    function deposit(amount){
        this.balance = this.balance + amount; 
    }

    function withdrawal(amount){
        if(amount <= this.balance){
            this.balance =this.balance - amount;
        }
        else if(amount > this.balance || this.balance < 0){
            return "insufficient funds";
        }
    }
    function print(){
    return "Your balance is : R" +this.balance;
    }

let account = new Account(1000);
account.deposit(500);
console.log(account.print());
account.withdrawal(2000);
console.log(account.print());


