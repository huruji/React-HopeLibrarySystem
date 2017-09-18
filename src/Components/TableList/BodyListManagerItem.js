
import React from 'react';

export default (props) => {
  const handleClick = function(url, data) {
    props.handleClick(url, data)
  };
  const managerList = props.managerList.map((item, index) => {
    return (
      <span onClick={handleClick(item.url, item.data)} key={index}><a href="javascript:" className="js-return-btn">{item.list}</a></span>
    )
  });
  return (
    <td className="center t-right-padding main-right-table-manage">
      {managerList}
    </td>
  )
}