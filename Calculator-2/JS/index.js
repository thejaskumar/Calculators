function insert(n) {
    document.getElementById('value').innerHTML += n;
}

function evaluat() {
    document.getElementById('output-value').innerHTML = eval(document.getElementById('value').innerText);
}

function clearScreen() {
    document.getElementById('value').innerHTML = "";
    document.getElementById('output-value').innerHTML = "";
}

function del() {
    var val = (document.getElementById('value').innerText).toString();
    val = val.substring(0, val.length - 1);
    document.getElementById('value').innerHTML = val;
}