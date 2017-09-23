export default {
  nav: {
    index: [{
      url: '/user/borrow',
      text: '我的借阅'
    }],
    reservation: [{
      url: '/user/reservation',
      text: '我的预约'
    }],
    account: [{
      url: '/user/account',
      text: '我的信息'
    }, {
      url: '/user/account/reset',
      text: '修改密码'
    }],
    book: [{
      url: '/user/book',
      id:0,
      text: '全部'
    }, {
      url: '/user/book?cate=编程类',
      id:1,
      text: '编程类'
    }, {
      url: '/user/book?cate=设计类',
      id:2,
      text: '设计类'
    }, {
      url: '/user/book?cate=摄影类',
      id:3,
      text: '摄影类'
    }, {
      url: '/user/book?cate=网管类',
      id:4,
      text: '网管类'
    }, {
      url: '/user/book?cate=人文类',
      id:5,
      text: '人文类'
    }, {
      url: '/user/book?cate=软件教程类',
      id:6,
      text: '软件教程类'
    }, {
      url: '/user/book?cate=博雅教育类',
      id:7,
      text: '博雅教育类'
    }, {
      url: '/user/book?cate=其他',
      id:8,
      text: '其他'
    }],
    equip: [{
      url: '/user/equip',
      text: '全部'
    }],
  },
  bookNav: {
    url: '/user/book'
  },
  aside: [{
    url: '/user/borrow',
    text: '图书管理'
  }, {
    url: '/user/reservation',
    text: '设备管理'
  }, {
    url: '/user/account',
    text: '账号管理'
  }, {
    url: '/user/book',
    text: '图书借阅'
  }, {
    url: '/user/equip',
    text: '设备预约'
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