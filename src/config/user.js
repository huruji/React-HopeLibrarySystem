export default {
  nav: {
    index: [{
      url: '/user',
      text: '我的借阅'
    }],
    reservation: [{
      url: '/user/reservation',
      text: '我的预约'
    }],
    modify: [{
      url: '/user/modify',
      text: '我的信息'
    }, {
      url: '/user/reset',
      text: '修改密码'
    }],
    book: [{
      url: '/user/book',
      text: '全部'
    }],
    equip: [{
      url: '/user/equip',
      text: '全部'
    }]
  },
  aside: [{
    url: '/user',
    text: '图书管理'
  }, {
    url: '/user/reservation',
    text: '设备管理'
  }, {
    url: '/user/modify',
    text: '账号管理'
  }, {
    url: '/user/book',
    text: '图书借阅'
  }, {
    url: '/user/equip',
    text: '设备借阅'
  }],
  headList: {
    user: [{
      className: 't-4 left t-left-padding',
      text: '图书'
    }, {
      className: 't-2 center',
      text: '借阅时间'
    }, {
      className: 't-2 center',
      text: '应还时间'
    }, {
      className: 't-4 center t-right-padding',
      text: '操作'
    }],
    reservation: [{
      className: 't-4 left t-left-padding',
      text: '设备'
    }, {
      className: 't-2 center',
      text: '预约时间'
    }, {
      className: 't-1 center',
      text: '状态'
    },{
      className: 't-2 center',
      text: '应还时间'
    }, {
      className: 't-1 center t-right-padding',
      text: '操作'
    }]
  }
}