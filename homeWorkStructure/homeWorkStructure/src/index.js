// Створіть функцію random DelayPrint, яка прийматиме рядок message як аргумент і виводитиме
// кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout,
//     щоб додати випадкову затримку перед виведенням кожної літери.
function randomDelayPrint(message) {
    function printWithRandomDelay(index) {
        if (index < message.length) {
            const letter = message.charAt(index);
            const randomDelay = Math.random() * 1000;
            setTimeout(() => {
                console.log(letter);
                printWithRandomDelay(index + 1);
            }, randomDelay);
        }
    }

    printWithRandomDelay(0);
}

randomDelayPrint("Hello");