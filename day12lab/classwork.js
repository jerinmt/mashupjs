function submitText() {
    const formElements = document.forms["form1"];
    const para = document.getElementById('display');
    para.innerHTML = formElements.elements[0].value;
    para.style.color = 'blue';
}
function mIn(element) {
    element.style.color = 'green';
}
function mOut(element) {
    element.style.color = 'blue';
}