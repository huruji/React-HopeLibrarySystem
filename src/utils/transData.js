export const transBorrowBook = function (data) {
  let result = [];
  data.forEach((item, index) => {
    let resultItem = [{
      text: item.bookName
    }, {
      text: item.borrowTime
    }, {
      text: item.returnBefore
    }, {
      text: '归还',
      managerList: [

      ],
      bookID: item.bookID,
      borrowID: item.borrowID
    }];
    result.push(resultItem);
  });
  return result;
};

export const transReservationEquip = function(data) {
  let result = [];
  data.forEach((item, index) => {
    let resultItem = [{
      text:item.equipName
    }, {
      text: item.borrowTime
    }, {
      text: item.reservation
    }, {
      text: item.returnBefore
    }, {
      text: '归还',
      managerList: [

      ],
      bookID: item.borrowEquipID,
      borrowID: item.borrowID
    }];
    result.push(resultItem);
  });
  return result;
};