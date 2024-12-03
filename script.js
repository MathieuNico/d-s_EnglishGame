function rollDice() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.style.display = 'none');

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
        case 1:
            document.querySelector('.dot3').style.display = 'block';
            break;
        case 2:
            document.querySelector('.dot1').style.display = 'block';
            document.querySelector('.dot5').style.display = 'block';
            break;
        case 3:
            document.querySelector('.dot1').style.display = 'block';
            document.querySelector('.dot3').style.display = 'block';
            document.querySelector('.dot5').style.display = 'block';
            break;
        case 4:
            document.querySelector('.dot1').style.display = 'block';
            document.querySelector('.dot2').style.display = 'block';
            document.querySelector('.dot4').style.display = 'block';
            document.querySelector('.dot5').style.display = 'block';
            break;
        case 5:
            document.querySelector('.dot1').style.display = 'block';
            document.querySelector('.dot2').style.display = 'block';
            document.querySelector('.dot3').style.display = 'block';
            document.querySelector('.dot4').style.display = 'block';
            document.querySelector('.dot5').style.display = 'block';
            break;
        case 6:
            document.querySelector('.dot1').style.display = 'block';
            document.querySelector('.dot2').style.display = 'block';
            document.querySelector('.dot4').style.display = 'block';
            document.querySelector('.dot5').style.display = 'block';
            document.querySelector('.dot6').style.display = 'block';
            break;
    }
}