import React from 'react';

export default (props) => {
  if(props.text) {
    return (
      <thead>
        <th class="t-10 center">当前暂无借阅</th>
      </thead>
    )
  }
  const list = props.list.map((item, index) => {
    if(index === 0) {
      return (
        <th className={`${item.className} t-left-padding`}>item.text</th>
      )
    }
    if(index === props.list.length -1) {
      return (
        <th className={`${item.className} t-right-padding`}>item.text</th>
      )
    }
    return (
      <th className={`${item.className}`}>item.text</th>
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