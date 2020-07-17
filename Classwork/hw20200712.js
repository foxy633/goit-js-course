"use strict";
const panelFlat = {
  numberOfFloors: 1, //количество этажей в доме
  numberOfApartments: 1, //количество квартир на этаже
  rooms: [], //массив квартир
  createHome(floorsNamber, apartamentsNamber, firstApartamentNamber) {
    this.numberOfFloors = floorsNamber;
    this.numberOfApartments = apartamentsNamber;

    let kvartira = {
      floor: 1,
      number: 155,
      status: "",
      lightBill: 0,
      woterBill: 0,
      gazBill: 0,
    };
  }, //создание дома с квартирами и всеми параметрами
  chargeForServices() {}, //выставление счета за услуги
  tenantStatusChange() {}, // изменить статус квартиры
  filterStat() {}, //фильтр квартир по статусу
  countPayments() {}, ///считать платежи
  debtsPerFloor() {}, // долги на этаже
  getGumberOfFloors() {
    // метот возвращ кол этажей
    return this.numberOfFloors;
  },
};
