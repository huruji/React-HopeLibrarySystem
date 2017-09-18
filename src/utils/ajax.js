export  function post(url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('post', url ,true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let sendData = [];
    for(let key in data) {
      let dataItem = key + '=' + data[key];
      sendData.push(dataItem);
    }
    console.log(sendData,url);
    xhr.send(sendData.join('&'));
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if((xhr.status >=200 && xhr.status < 300)|| (xhr.status===304)) {
          resolve(JSON.parse(xhr.responseText));
        }
      }
    }
  })
}

export function get(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.withCredentials = true;
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if((xhr.status >=200 && xhr.status < 300)|| (xhr.status===304)) {
          resolve(JSON.parse(xhr.responseText))
        }
      }
    }
  })
}