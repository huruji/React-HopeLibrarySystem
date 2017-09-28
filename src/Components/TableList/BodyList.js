import React from 'react';
import BodyListItem from './BodyListItem';
import BodyListManagerItem from './BodyListManagerItem';
export default (props) => {
  const list = props.list.map((item, index) => {
    console.log('item', item);
    if(index === 0) {
      return (
        <BodyListItem key={index} className="left t-left-padding" text={item.text}/>
      )
    } else if(index === props.list.length - 1) {
      console.log('mmmmitem', item);
      return (
        <BodyListManagerItem key={index} index={props.index} managerList={item.managerList} handleClick={props.handleClick}/>
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