let age = prompt('How old are you?');
let city = prompt('What is your home city?');
let favSport = prompt('What is your favourite sport?');


let message = '';


if (age) {
    message += `You are ${age} years old!\n`;
} else if (age === null) {
    message += "Sorry, you don't want to tell your age!\n";
}

if (city === 'Kyiv') {
    message += 'Congratulations! You are from the capital of Ukraine!\n';
} else if (city === 'Washington') {
    message += 'Congratulations! You are from the capital of the USA!\n';
} else if (city === 'London') {
    message += 'Congratulations! You are from the capital of Great Britain!\n';
} else if (city === null) {
    message += "Sorry, you don't want to tell your home city!\n";
} else {
    message += `Congratulations! You are from ${city}!\n`;
}


if (favSport === 'boxing') {
    message += 'Amazing! You want to be a new Mike Tyson?\n';
} else if (favSport === 'football') {
    message += 'Amazing! You want to be a new Pele?\n';
} else if (favSport === 'tennis') {
    message += 'Amazing! You want to be a new Novak Djokovic?\n';
} else if (favSport === null) {
    message += "Sorry, you don't want to tell your favourite sport!\n";
} else {
    message += 'Amazing! I love it too!\n';
}


alert(message);

