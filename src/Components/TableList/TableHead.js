import React from 'react';

export default (props) => {
  if(props.text) {
    console.log('head');
    return (
      <thead>
        <tr>
          <th className="t-10 center">{props.text}</th>
        </tr>
      </thead>
    )
  }
  console.log(props);
  console.log('headout');
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