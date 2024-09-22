// input value function

function getInputFieldByNumber (id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input)
    return inputNumber;
}

function getInnerTextToNumber (id){
    const text = document.getElementById(id).innerText
    const textNumber = parseFloat(text)
    return textNumber;
}