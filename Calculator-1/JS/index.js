function append(n) {
    document.form.display.value += n;
}

function equal() {
    document.form.display.value = eval(document.form.display.value);
}

function clea(){
    document.form.display.value = "";
}