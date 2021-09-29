/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }
  var deposit = new Transaction('deposit', amount);
  this.transactions.push(deposit);
  return true;

};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }
  var withdraw = new Transaction('withdrawal', amount);
  this.transactions.push(withdraw);
  return true;
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawTotal = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositTotal += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      withdrawTotal += this.transactions[i].amount;
    }
  }
  var total = depositTotal - withdrawTotal;
  return total;

};
