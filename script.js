const countdownContainer = document.querySelector('.countdown-container');
const countdownElement = document.querySelector('#countdown');
const daysUntilWeSeeEachOtherAgainElement = document.querySelector('#days-until-we-see-each-other-again');

const targetDate = new Date('August 1, 2024 00:00:00').getTime();

function countdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

    if (distance < 0) {
        countdownElement.textContent = 'Countdown Over!';
    }

    const daysUntilWeSeeEachOtherAgain = Math.floor(distance / (1000 * 60 * 60 * 24));
    daysUntilWeSeeEachOtherAgainElement.textContent = `Days until we see each other again: ${daysUntilWeSeeEachOtherAgain}`;
}

setInterval(countdown, 1000);