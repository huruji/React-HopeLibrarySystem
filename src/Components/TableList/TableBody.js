import React from 'react';

export default (props) => {
  const list = props.list.map(item => {
    const textList = item.textList.map((text, index) => {
      if(index === 0) {
        return (
          <td className="left t-left-padding">{text.content}</td>
        )
      }
      if(index === item.textList.length - 1) {
        const urlList = text.urlList.map((url) => {
          return (
            <span><a href="javascript:" className="js-return-btn" >{url.text}</a></span>
          )
        });
        return (
          <td className="center t-right-padding main-right-table-manage">
            {urlList}
          </td>
        )
      }
      return (
        <td className="center">{text.content}</td>
      )
    });
    return (
      <tr>
        {textList}
      </tr>
    )
  });
  return (
    <tbody>
      {list}
    </tbody>
  )
}