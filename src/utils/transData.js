export const transBorrowBook = function (data, handleClick) {
  let result = [];
  data.forEach((item, index) => {
    let resultItem = [{
      text: item.bookName
    }, {
      text: item.borrowTime
    }, {
      text: item.returnBefore
    }, {
      managerList: [
        {
          text: '归还',
          url:'30000',
          bookID: item.bookID,
          borrowID: item.borrowID,
          handleClick
        }
      ],
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
      managerList: [
        {
          text:'归还',
          list: '鬼皇'
        }
      ],
      bookID: item.borrowEquipID,
      borrowID: item.borrowID
    }];
    result.push(resultItem);
  });
  return result;
};