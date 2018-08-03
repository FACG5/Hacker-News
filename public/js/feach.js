const feachApi = function feachApi(value, method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function onreadystatechange() {

    if (xhr.readyState === 1) {
      cb(null, true);
    }

    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
      cb(obj);
    }

    if (xhr.readyState === 4 && xhr.status !== 200) {
      cb(null, false);
    }
  };
  xhr.open(method, url);
  xhr.send(value);
};
