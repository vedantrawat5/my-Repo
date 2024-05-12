const getMessage = document.getElementById('inputText');

function showMessage(){
    document.getElementById('displayText').innerHTML = getMessage.value;
    getMessage.value = '';
}