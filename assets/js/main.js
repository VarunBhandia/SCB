var styles = [
    'color: red',
    'font-wieght: 900',
    'font-size: 25px',
    'font-family: "Raleway, sans-serif"',
].join(';');
var styles1 = [
    'font-family: raleway',
    'color: blue',
    'font-size: 20px',
].join(';');

console.log('%c Standard Chartered Tasks', styles);

function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 0;
    console.log(num1);
    console.log(num2);
    for (i = 0; i < num - 2; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(num2);
    }
}

function makeTable(num, limit) {
    for (i = 1; i < limit; i++) {
        console.log('', i, 'X', num, '=', num * i);
    }
}

console.log('%c => Fibonacci Series', styles1);
fibonacci(10);

console.log('%c => Display Table', styles1);
makeTable(8, 10)

function changeImage() {
    var element = document.getElementById('img-change');
    if (element.src == "https://av.sc.com/in/content/images/in-term-deposit-and-earn-up-to-6.30-pa-1600x420px.jpg") {
        element.src = 'https://av.sc.com/in/content/images/svtc_product-masthead-slider-banner.jpg'
    }
    else {
        element.src = 'https://av.sc.com/in/content/images/in-term-deposit-and-earn-up-to-6.30-pa-1600x420px.jpg'
    }
}


function submitForm() {
    var element = document.getElementById("mobNumber").value;
    var pattern = "^[7-9]{1}[0-9]{9}$";
    var user = {}

    user.mobNumber = document.getElementById("mobNumber").value;
    user.first_name = document.getElementById("first_name").value;
    user.last_name = document.getElementById("last_name").value;
    user.username = document.getElementById("username").value;
    element.search(document.getElementById("mobNumber"))
    if (element.search(pattern) >= 0 && user.mobNumber && user.first_name && user.last_name && user.username) {
        document.getElementById("error-msg").style.display = "none"
        document.getElementById("success-msg").style.display = "block"
        document.getElementById("success-msg").style.color = "green"


        generate_table(user);

    }
    else {
        document.getElementById("success-msg").style.display = "none"
        document.getElementById("error-msg").style.display = "block"
        document.getElementById("error-msg").style.color = "red"
    }

}

function generate_table(user) {

    var tblBody = document.getElementById("table-body");

    var row = document.createElement("tr");

    var cell = document.createElement("td");

    var cellText = document.createTextNode(user.mobNumber);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(user.first_name);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(user.last_name);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(user.username);
    cell.appendChild(cellText);
    row.appendChild(cell);

    // add the row to the end of the table body
    tblBody.appendChild(row);
}