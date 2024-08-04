var buttons = document.getElementsByTagName('button');
var display = document.getElementById('display');
var equalsTo = document.getElementById('equals');
var ACButton = document.getElementById('All-Clear');
var backspace = document.getElementById('Erase');

for( var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.innerHTML;
        console.log(value);
        display.innerHTML += value;
    });
}

equalsTo.addEventListener('click', function(){
    //console.log(typeof(display.innerHTML));
    var result = eval(display.innerHTML);
    display.innerHTML = result;
})

ACButton.addEventListener('click', function(){
    display.innerHTML = '';
})

backspace.addEventListener('click', function(){
    display.innerHTML = display.innerHTML.slice(0, -1);
})



