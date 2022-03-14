/* global axios */
// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data = [];

function renderData(showData) {
  let str = '';
  showData.forEach((row) => {
    const content = `<tr>
      <td>${row.作物名稱}</td>
      <td>${row.市場名稱}</td>
      <td>${row.上價}</td>
      <td>${row.中價}</td>
      <td>${row.下價}</td>
      <td>${row.平均價}</td>
      <td>${row.交易量}</td>
      </tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(e) {
  let showData = [];
  let category = '';
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = [...data].filter((i) => i.種類代碼 === category);
    // TODO: 之後拆成 renderData 函式
    renderData(showData);
  }
}

axios.get(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    // TODO: 之後拆成 renderData 函式
    const showData = [...data];
    renderData(showData);
  });

filter.addEventListener('click', filterCategory);
