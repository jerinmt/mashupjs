function submitFeedback() {
    const formElements = document.forms["form1"];
    const displayNodes = document.getElementsByClassName('display');
    displayNodes[0].innerHTML = formElements.elements[0].value;
    displayNodes[1].innerHTML = formElements.elements[1].value;
    const message = document.getElementsByTagName('h2');
    message[0].innerHTML = "Thanks for your feedback";
    message[0].style.color = 'green';
    setTimeout(hideMessage, 5000);
}
function hideMessage() {
    const message = document.getElementsByTagName('h2');
    message[0].style.display = 'none';
}
function mIn(element) {
    element.style.color = 'blue';
}
function mOut(element) {
    element.style.color = 'black';
}