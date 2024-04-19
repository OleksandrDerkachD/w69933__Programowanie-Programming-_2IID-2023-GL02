// zad 1
function silnia(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}

console.log(silnia(5));
// Zad 2
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
// Zad 3
const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', () => {
    element.hidden = !element.hidden;
});

const ul = document.querySelector('ul')
const table = document.querySelector("myTable")

function add(){
    const value = document.querySelector('#name').value;
    document.querySelector('#name').value = null;
    
    const li = document.createElement('li');
    
    li.textContent = value;
    ul.appendChild(li);
    const surname = document.querySelector('#surname').value;
    document.querySelector('#Asurname').value = null;
    var table = document.querySelector('table');
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    newCell.textContent = value;
    var newCell2 = newRow.insertCell();
    newCell2.textContent = surname;

}

