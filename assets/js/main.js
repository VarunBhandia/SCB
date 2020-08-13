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