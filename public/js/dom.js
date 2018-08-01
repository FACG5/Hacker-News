document.getElementById('new').addEventListener('click', (event) => {
  feachApi(null, 'GET', '/newStories', render);
});

document.getElementById('top').addEventListener('click', (event) => {
  feachApi(null, 'GET', '/topStories', render);
});

document.getElementById('best').addEventListener('click', (event) => {
  feachApi(null, 'GET', '/bestStories', render);
});

function render(arr) {
  let main = document.getElementById("main");
  main.textContent = '';
  arr.forEach(element => {
    ele = JSON.parse(element);
    let item = document.createElement('div');
    item.classList.add("item");
  
    let aDiv = document.createElement('div');
    let a = document.createElement('a');
    a.textContent = ele.title
    a.href = ele.url;
    aDiv.appendChild(a);

    let bDiv = document.createElement('div');
    let point = document.createElement('span');
    point.textContent = ele.score +" points";

    let by = document.createElement('span');
    by.textContent = " by " + ele.by;

    bDiv.appendChild(point);
    bDiv.appendChild(by);

    item.appendChild(aDiv);
    item.appendChild(bDiv);
    main.appendChild(item);
  });
}
