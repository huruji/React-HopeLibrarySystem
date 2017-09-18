import React from 'react';

export default (props) => {
  if(props.text) {
    return (
      <thead>
        <th className="t-10 center">{props.text}</th>
      </thead>
    )
  }
  const list = props.list.map((item, index) => {
    if(index === 0) {
      return (
        <th className={`${item.className} t-left-padding`} key={index}>{item.text}</th>
      )
    }
    if(index === props.list.length -1) {
      return (
        <th className={`${item.className} t-right-padding`} key={index}>{item.text}</th>
      )
    }
    return (
      <th className={`${item.className}`} key={index}>{item.text}</th>
    )
  });
  return (
    <thead>
      <tr>
        {list}
      </tr>
    </thead>
  )
}