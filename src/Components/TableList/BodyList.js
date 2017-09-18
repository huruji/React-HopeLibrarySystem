import React from 'react';
import BodyListItem from './BodyListItem';
import BodyListManagerItem from './BodyListManagerItem';
export default (props) => {
  const list = props.list.map((item, index) => {
    if(index === 0) {
      return (
        <BodyListItem key={index} className="left t-left-padding" text={item.text}/>
      )
    } else if(index === props.list.length - 1) {
      return (
        <BodyListManagerItem key={index} managerList={item.managerList}/>
      )
    }
    return (
      <BodyListItem key={index} className="center" text={item.text}/>
    )
  });
  return (
    <tr>
      {list}
    </tr>
  )

}