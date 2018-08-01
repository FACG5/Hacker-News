document.getElementById('new').addEventListener('click', (event) => {
  feachApi(null, 'get', '/newStories', render);
});
function render(arr) {
    console.log(arr);
  const item = document.createElement('div').classList.add('item');
  const aDiv = document.createElement('div');
  const aElement = document.createElement('a').href = '';
  aElement.textContent = '';
}
