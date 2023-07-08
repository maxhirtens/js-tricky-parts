function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "invalid PIN";
      return `$${amount}`;
    },
    deposit(inputPin, depositAmount) {
      if (inputPin !== pin) return "invalid PIN";
      amount += depositAmount;
      return `New Balance: ${amount}`;
    },
    withdraw(inputPin, withdrawalAmount) {
      if (inputPin !== pin) return "invalid PIN";
      if (withdrawalAmount > amount) return "You can't do that.";
      amount -= withdrawalAmount;
      return `New Balance: ${amount}`;
    },
    changePin(inputPin, newPin) {
      if (inputPin !== pin) return "invalid PIN";
      pin = newPin;
      return "PIN changed.";
    },
  };
}

module.exports = { createAccount };
