function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('result').value += character;
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    try {
        let result = eval(expression);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
