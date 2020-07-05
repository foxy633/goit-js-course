"use strict";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [],
  nextId: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {
      id: this.nextId,
      type: type,
      amount: amount,
    };
    this.nextId++;
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Cнятие такой суммы не возможно, недостаточно средств");
      return this.balance;
    } else {
      let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
      return this.balance;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (id === transaction["id"]) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let arrey = [];
    for (let transaction of this.transactions) {
      if (type === transaction["type"]) {
        arrey.push(transaction);
      }
    }
    return arrey;
  },
};
console.log(account.getBalance());
console.log(account.deposit(150));
console.log(account.withdraw(30));
console.log(account.withdraw(200));
console.log(account.deposit(40));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
