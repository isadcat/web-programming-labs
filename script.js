console.log("Привет");
console.error("Error");
console.warn("Сообщение предупреждения");

function showButton(card) {
    let b=card.getElementsByTagName("input")[0];
    b.style.display="inline";
}

function hideButton(card) {
    let b2=card.getElementsByTagName("input")[0];
    b2.style.display="none";
}

function call() {
    alert('Звонить только в рабочее время!');
    return false;
}

function logo() {
    alert('У нас лучший логотип!');
    return false;
}

function notReadyYet() {
    alert('Извините, товара нет в наличии');
    return false;
}

function notReadyAlert() {
    alert('Sorry, not ready yet!\n Извините, еще не готово!');
    return false;
}
function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'Аппарат для суеты') {
        productNumber = 0;
    }
    else if (name == 'Бюджетная суета') {
        productNumber = 1;
    }
    else if (name == 'V2.0') {
        productNumber = 2;
    }
    else {
        alert ('Товар не найден')
    }
    let c=document.getElementsByClassName('card');
    if (name==''){
        c[0].style.display="inline-block";
        c[1].style.display="inline-block";
        c[2].style.display="inline-block";
    }
    else {
        c[0].style.display="none";
        c[1].style.display="none";
        c[2].style.display="none"; 
    }
    let c2=c[productNumber];
    c2.style.display = 'inline-block';
    
    
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundstyle = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.background = '';
    }, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key){
        if(key.key == 'Enter')
            search();
    })
}