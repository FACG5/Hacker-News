
function domainfromurl(url) {
  const regexurl = /(https?:\/\/)*(www\.)*(\w+)(\.\w+)?/;
  const matchArray = url.match(regexurl);
  return matchArray[3] + (matchArray[4] || '');
}

function render(arr, state) {
  const main = document.getElementById('main');
  main.textContent = '';
  if (state) {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'https://zippy.gfycat.com/SkinnySeveralAsianlion.gif';
    loadingImg.id = 'loadingImg';
    main.appendChild(loadingImg);
    return;
  }
  arr.filter(Boolean).forEach((element) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const titleDiv = document.createElement('div');
    const a = document.createElement('a');

    a.textContent = element.title;
    a.href = element.url;
    a.classList.add('title');
    titleDiv.appendChild(a);

    if (element.url) {
      const hostName = document.createElement('span');
      hostName.textContent = `  (${domainfromurl(element.url)})`;
      hostName.classList.add('hostName');
      titleDiv.appendChild(hostName);
    }
    const detailDiv = document.createElement('div');
    const point = document.createElement('span');
    point.textContent = `${element.score} points`;
    point.classList.add('point');

    const name = document.createElement('span');
    name.textContent = ` by ${element.by}`;
    name.classList.add('name');

    detailDiv.appendChild(point);
    detailDiv.appendChild(name);

    item.appendChild(titleDiv);
    item.appendChild(detailDiv);
    main.appendChild(item);
  });
}

window.onload = feachApi(null, 'GET', '/newStories', render);

Array.from(document.getElementsByClassName('news'))
  .forEach((element) => {
    element.addEventListener('click', () => {
      feachApi(null, 'GET', element.id, render);
    });
  });
