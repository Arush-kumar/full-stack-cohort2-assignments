class BankAccount{
  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }

  deposit(amount){
    this.balance += amount;
    console.log(`Deposit Amount: ${amount}. New balance is ${this.balance}`);
  }

  withdraw(amount){
    if(amount > this.balance) return `Insufficient balance.`;
    this.balance -= amount;
    console.log(`Withdrawal Amount: ${amount}. New balance is ${this.balance}`);
  }
}

const account1 = new BankAccount("Arush", 10000);
const account2 = new BankAccount("Sem", 20000);