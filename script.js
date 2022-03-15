'use strict';

let image = document.getElementById('img');

let data = [
  {
    id: 1,
    uploadedImage: image,
    numberOf: 13,
    title: 'Business',
  },
  {
    id: 2,
    uploadedImage: image,
    numberOf: 49,
    title: 'Users',
  },
  {
    id: 3,
    uploadedImage: image,
    numberOf: 2,
    title: 'Groups',
  },
  {
    id: 4,
    uploadedImage: image,
    numberOf: 28,
    title: 'Design Workflow',
  },
  {
    id: 5,
    uploadedImage: image,
    numberOf: 677,
    title: 'Manage Documents',
  },
  {
    id: 6,
    uploadedImage: image,
    numberOf: 14,
    title: 'E-form',
  },
  {
    id: 7,
    uploadedImage: image,
    numberOf: 39,
    title: 'Submitted-Forms',
  },
  {
    id: 8,
    uploadedImage: image,
    numberOf: 1,
    title: 'Invoice',
  },
  {
    id: 9,
    uploadedImage: image,
    numberOf: 0,
    title: 'Monitoring',
  },
  {
    id: 10,
    uploadedImage: image,
    numberOf: 0,
    title: 'Recovery and Backup',
  },
];

let id = null;

const formCreate = document.getElementById('form');
const blocks = document.getElementById('blocksId');

function displayData() {
  blocks.innerHTML = '';
  data.forEach(element => {
    blocks.innerHTML += `<div class="block">
    <div>
      <h2>${element.numberOf}</h2>
      <h3>${element.title}</h3>
      <button id="${element.id}" class="button-update">Update</button>
    </div>
  </div>`;
  });
  attachEventToButton();
}

document.getElementById('btnCreate').addEventListener('click', function () {
  blocks.style.display = 'none';
  formCreate.style.display = 'block';
});

document.getElementById('cancel').addEventListener('click', function () {
  formCreate.style.display = 'none';
  blocks.style.display = 'block';
});

formCreate.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const number = document.getElementById('number').value;

  if (id) {
    const itemIndex = data.findIndex(item => item.id == id);
    data[itemIndex] = {
      ...data[itemIndex],
      title,
      numberOf: number,
    };
  } else {
    data.push({ title, numberOf: number, id: new Date().getTime() });
  }

  displayData();

  formCreate.style.display = 'none';
  blocks.style.display = 'block';

  id = null;
}

displayData();

function attachEventToButton() {
  Array.from(document.getElementsByClassName('button-update')).forEach(
    element => {
      element.addEventListener('click', () => updateItem(element.id));
    }
  );
}

function updateItem(itemId) {
  id = itemId;
  const title = document.getElementById('title');
  const number = document.getElementById('number');

  console.log(itemId);
  blocks.style.display = 'none';
  formCreate.style.display = 'block';

  const item = data.find(item => item.id == id);

  title.value = item.title;
  number.value = item.numberOf;
}
