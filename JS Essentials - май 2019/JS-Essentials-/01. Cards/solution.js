function solve() {
    Array.from(document.getElementsByTagName('img')).forEach(e => e.addEventListener('click', cardValue));


    function cardValue(e) {
        let spans = document.getElementById('result').children;
        let card = e.target;
        card.src = './images/whiteCard.jpg';
        let parent = card.parentNode;
        card.removeEventListener('click', cardValue);


        if (parent.id === 'player1Div') {
            spans[0].textContent = card.name;
        } else if (parent.id === 'player2Div') {
            spans[2].textContent = card.name;
        }

        if (spans[0].textContent && spans[2].textContent) {
            let winner;
            let loser;

            if (Number(spans[0].textContent) > Number(spans[2].textContent)) {
                winner = document.querySelector(`#player1Div img[name="${spans[0].textContent}"]`);
                loser = document.querySelector(`#player2Div img[name="${spans[2].textContent}"]`);

            } else {
                winner = document.querySelector(`#player2Div img[name="${spans[2].textContent}"]`);
                loser = document.querySelector(`#player1Div img[name="${spans[0].textContent}"]`);
            }

            winner.style.border = '2px solid green';
            loser.style.border = '2px solid red';


            document.getElementById('history').textContent += `[${spans[0].textContent} vs ${spans[2].textContent}] `;
            spans[0].textContent = '';
            spans[2].textContent = '';
        }
    }

}