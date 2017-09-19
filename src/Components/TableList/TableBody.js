import React from 'react';
import BodyList from './BodyList';

export default (props) => {
  console.log('list',props.list);
  const list = props.list.map((item,index) => {
    return(
      <BodyList list={item} key={index}/>
    )
  });
  return (
    <tbody>
    {list}
    </tbody>
  )
}