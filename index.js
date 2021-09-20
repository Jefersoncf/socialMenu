let selectField = document.getElementById('selectField');
let selectText = document.getElementById('selectText');

let options = document.getElementsByClassName('options-menu');

let list = document.getElementById('list');
let setaIcon = document.getElementById('setaIcon');

selectField.onclick = function(){
    list.classList.toggle('hide');
    setaIcon.classList.toggle('rotate');
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        setaIcon.classList.toggle('rotate');
    }
}