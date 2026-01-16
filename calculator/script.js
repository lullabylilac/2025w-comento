const resultDiv = document.querySelector('.result');

function handleButtonClick(event) {
    const target = event.target; 
    const action = target.innerText; 
    const currentDisplay = resultDiv.innerText; 

    if (action === 'C') {
        resultDiv.innerText = '';
    } 
    else if (action === '=') {
        try {
            let formula = currentDisplay.replace('x', '*').replace('÷', '/');
            resultDiv.innerText = eval(formula); 
        } catch (e) {
            resultDiv.innerText = '오류';
        }
    } 
    else {
        if (currentDisplay.length < 12) {
            resultDiv.innerText = currentDisplay + action;
        }
    }
}

const allButtons = document.querySelectorAll('button');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].onclick = handleButtonClick;
}