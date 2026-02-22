let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("image-display");

let clickCount = 0;

// Списък със съобщения за бутона "No"
const noTexts = [
    "Are you sure?",
    "Really sure??",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of mind?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

noButton.addEventListener("click", function() {
    clickCount++;
    
    // 1. Увеличаваме бутона "Yes"
    let newSize = 1.2 + (clickCount * 0.5); // Увеличава се прогресивно
    yesButton.style.transform = `scale(${newSize})`;
    
    // 2. Преместваме бутона "No" леко надясно, за да не пречи на растящия "Yes"
    let noMove = clickCount * 25;
    noButton.style.transform = `translateX(${noMove}px)`;

    // 3. Сменяме текста на бутона "No"
    if (clickCount < noTexts.length) {
        noButton.innerText = noTexts[clickCount];
    } else {
        noButton.innerText = "Just say Yes! ❤️";
    }
});

yesButton.addEventListener("click", function() {
    // Промяна при успех
    questionText.innerText = "Yay!!! I love you! ❤️✨";
    mainImage.src = "https://media.tenor.com/fK7v7q7fD7MAAAAi/kiss-sweet.gif";
    
    // Скриваме бутона "No"
    noButton.style.display = "none";
    yesButton.style.transform = "scale(1.5)";
});
