
import React from 'react';

export default (props) => {
  let handleClick = function(index, bookID, borrowID) {
    props.handleClick(index,bookID,borrowID)
  };
  console.log('managerList',props.managerList);
  const managerList = props.managerList.map((item, index) => {
    return (
      <span onClick={()=>handleClick(props.index, item.bookID, item.borrowID)} key={index}><a href="javascript:" className="js-return-btn">{item.text}</a></span>
    )
  });
  return (
    <td className="center t-right-padding main-right-table-manage">
      {managerList}
    </td>
  )
}