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

class User {
    constructor(mobNumber, name, email, acccount) {
       
        this.mobNumber = mobNumber;
        this.name = name;
        this.email = email;
        this.acccount = acccount;
    }

}
function submitForm() {
    var element = document.getElementById("mobNumber").value;
    var pattern = "^[7-9]{1}[0-9]{9}$";

    var mobNumber = document.getElementById("mobNumber").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var acccount = document.getElementById("acccount").value;
    var user = new User(mobNumber, name, email, acccount);

    if (element.search(pattern) >= 0 && mobNumber && name && email && acccount) {
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
    var cellText = document.createTextNode(user.name);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(user.email);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(user.acccount);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
}

function generate_list() {

    var list1 = document.getElementById("list");

    var ol = document.createElement("ol");

    var li = document.createElement("li");

    var cellText = document.createTextNode('Varun');
    li.appendChild(cellText);
    ol.appendChild(li);
    var li1 = document.createElement("li");
    var cellText = document.createTextNode('varun 1');
    li1.appendChild(cellText);
    ol.appendChild(li1);

    list1.appendChild(ol);
}

