//  method 2
const btn2 = document.querySelector('#b1');
btn2.onclick = () => alert("Hello World");

// method 3
const btn3 = document.querySelector('#b2');
btn3.addEventListener('click', () => {
    alert("Hello World");
});

const btn = document.querySelector("#b3");

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});