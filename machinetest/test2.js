const lotteryNumbers = [4366223, 3462626, 3597346, 8462849, 2594028, 5925619, 3492651, 9957361, 4780233, 7458225];
function drawLottery() {
    let i = Math.floor(Math.random() * 10);
    document.getElementById('modalResult').innerHTML = `The winning lottery number is ${lotteryNumbers[i]}`;
    console.log(`The winning lottery number is ${lotteryNumbers[i]}`);
    let output = document.getElementById('result');
    output.innerHTML = lotteryNumbers[i];
    output.classList = 'text-danger text-center';
    document.getElementById('checkButton').style.visibility = 'hidden';
    document.getElementById('resultHead').style.visibility = 'visible';
}