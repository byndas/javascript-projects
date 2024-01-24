function makeLine(size, hash) {
    let line = '';
    for (let i = 0; i < size; i++) { line += hash;}
    return line;
}
console.log(makeLine(5, '#'));

function makeSquare(size) {
    // let square = '';
    // for (let i = 0; i < size; i++) { square += `\n${makeLine(size, '#')}`; }
    // return square;
    return makeRectangle(size, size);
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) { rectangle += `\n${makeLine(width, '#')}`; }
    return rectangle;
}
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i <= height; i++) { stairs += `\n${makeLine(i, '#')}`; }
    return stairs;
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, hash) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) { spaceLine += ' '; }
    for (let i = 0; i < numChars; i++) { spaceLine += hash; }
    for (let i = 0; i < numSpaces; i++) { spaceLine += ' '; }
    return spaceLine;
}
console.log(makeSpaceLine(3, 5, '#'));

function makeIsoscelesTriangle(height) {
    let isoTriangle = '';
    for (let i = 0; i < height; i++) {
        let spaces = height - i - 1;
        let hashes = 2 * i + 1;
        isoTriangle += `\n${makeSpaceLine(spaces, hashes, '#')}`;
    }
    return isoTriangle;
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);
    for (let i = height - 1; i > -1 ; i--) {
        let spaces = height - i - 1;
        let hashes = 2 * i + 1;
        diamond += `\n${makeSpaceLine(spaces, hashes,'#')}`;
    }
    return diamond;
}
console.log(makeDiamond(5));