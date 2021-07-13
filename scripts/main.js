let nums = [2, 8, 7, 5, 4, 1, 6, 9, 10, 3];

let functions = [shuffle, random, sort, reverse];

function shuffle(array) {
    console.log('Shuffle');
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function random(array) {
    // console.log('Random');
    return array[Math.floor(Math.random() * array.length)];
}

function sort(array) {
    console.log('Sort');
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

function reverse(array) {
    console.log('Reverse');
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

document.querySelector('#startTest').addEventListener('click', () => {
    let result = random(functions)(nums);
    console.log(result, nums);
});
