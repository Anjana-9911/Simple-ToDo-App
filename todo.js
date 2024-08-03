const form = document.getElementById('info-form');
const table = document.getElementById('info-table').getElementsByTagName('table')[0];
const completedTasksList = document.getElementById('completed-tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  var date = document.getElementById('date').value;
  var text = document.getElementById('text').value;

  const row = document.createElement('tr');

  const dateCell = document.createElement('td');
  const textCell = document.createElement('td');
  const doneCell = document.createElement('td');
  const deleteCell = document.createElement('td');

  dateCell.textContent = date;
  textCell.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.style.background = "transparent";
  deleteButton.onclick = () => {
    row.remove();
  };

  const doneButton = document.createElement('button');
  doneButton.textContent = 'Done';
  doneButton.style.background = "transparent";
  doneButton.onclick = () => {
    const task = document.createElement('li');
    task.textContent = `${date} : ${text}`;
    completedTasksList.appendChild(task);
    row.remove();
  };

  deleteCell.appendChild(deleteButton);
  doneCell.appendChild(doneButton);

  row.appendChild(dateCell);
  row.appendChild(textCell);
  row.appendChild(doneCell);
  row.appendChild(deleteCell);

  table.appendChild(row);

  document.getElementById('date').value = '';
  document.getElementById('text').value = '';
});
