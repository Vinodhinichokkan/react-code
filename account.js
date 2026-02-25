function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    }
  };
}

const acc = bankAccount();
acc.deposit(500); // 1500