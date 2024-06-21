const form = document.querySelector('form');
const pIp = document.querySelector('#product');
const qIp = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pVal = pIp.value;
    const qVal = qIp.value;
    const ele = document.createElement('LI');
    ele.innerText = `${qVal} ${pVal}`;
    list.append(ele);
    pIp.value = '';
    qIp.value = ''
});
list.addEventListener('click', function (e) {
    e.target.remove()
})
