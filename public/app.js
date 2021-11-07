const socket = io();

const offLineBtn = document.getElementById('offLineBtn');
const onLineBtn = document.getElementById('onLineBtn');

offLineBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('offline 선택');
});

onLineBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('online 선택');
});
