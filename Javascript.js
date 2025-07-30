let btn = document.querySelectorAll('.cell');

let resetGame = () => {
    btn.forEach(cell => {
        cell.innerHTML = '';
        cell.disabled = false;
    });
    count = 0;
};

let resetButton = document.getElementById('restart-button');
resetButton.addEventListener('click', resetGame);
let count = 0;
btn.forEach( cell => {
    cell.addEventListener('click', () => 
    {
        if (cell.innerHTML === '') 
    {
        if (count % 2 === 0) 
        {
            cell.innerHTML = 'X';
        }
        else 
        {
            cell.innerHTML = 'O';
        }
        checkWinner();
        count++;
        document.getElementById('status').innerText = count % 2 === 0 ? "X's Turn" : "O's Turn";
    }
    else 
    {
        alert('Invalid Move');
    }
    });
});

let checkWinner = () => 
    {
        let cell1 = document.querySelector(".cell[data-index='0']");
        let cell2 = document.querySelector(".cell[data-index='1']");
        let cell3 = document.querySelector(".cell[data-index='2']");
        let cell4 = document.querySelector(".cell[data-index='3']");
        let cell5 = document.querySelector(".cell[data-index='4']");
        let cell6 = document.querySelector(".cell[data-index='5']");
        let cell7 = document.querySelector(".cell[data-index='6']");
        let cell8 = document.querySelector(".cell[data-index='7']");
        let cell9 = document.querySelector(".cell[data-index='8']");
        
        if((cell1.innerHTML === cell2.innerHTML && cell2.innerHTML === cell3.innerHTML && cell1.innerHTML !== '') ||
           (cell4.innerHTML === cell5.innerHTML && cell5.innerHTML === cell6.innerHTML && cell4.innerHTML !== '') ||
           (cell7.innerHTML === cell8.innerHTML && cell8.innerHTML === cell9.innerHTML && cell7.innerHTML !== '') ||
           (cell1.innerHTML === cell4.innerHTML && cell4.innerHTML === cell7.innerHTML && cell1.innerHTML !== '') ||
           (cell2.innerHTML === cell5.innerHTML && cell5.innerHTML === cell8.innerHTML && cell2.innerHTML !== '') ||
           (cell3.innerHTML === cell6.innerHTML && cell6.innerHTML === cell9.innerHTML && cell3.innerHTML !== '') ||
           (cell1.innerHTML === cell5.innerHTML && cell5.innerHTML === cell9.innerHTML && cell1.innerHTML !== '') ||
           (cell3.innerHTML === cell5.innerHTML && cell5.innerHTML === cell7.innerHTML && cell3.innerHTML !== '')) 
        {
            alert("Winner is " + (count % 2 === 0 ? "X" : "O"));
            resetGame();
        }
        else if (count === 8) 
        {
            alert("It's a draw!");
            resetGame();
        }
    }
