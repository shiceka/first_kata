const accountBalance = (withdrawal=0,deposit=0)=>{
    let balance = 1000;
//  We must start by depositting before we withdraw
    if(deposit >= withdrawal || deposit < withdrawal){
        balance = balance + deposit - withdrawal;
    }
//  We cannot have a negative bank balance hence we can not withdraw more than we have
    else if(balance < 0 || withdrawal > balance || deposit < 0){
        return "insufficient funds!"+" Please contact your bank for more details";
    }
    
    return balance;
}
console.log(Balance(200, 300));