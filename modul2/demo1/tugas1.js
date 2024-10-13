function clearDisplay() {
    document.getElementById('result').value = '';
}

function append(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
