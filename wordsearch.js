//PAIR PROGRAMMED with Vanessa

const transpose = function(matrix) {
    let transposed = [];
    for (i = 0; i < matrix[0].length; i++) {
        transposed.push([]);
        for (j = 0; j < matrix.length; j++) {
        transposed[i].push(matrix[j][i]);
        }
    }
    return transposed;
};

const skimsThroughMatrix = (matrix, word) => {
    const test = matrix.map(ls => ls.join(''));
    for (element of test) {
        if (element.includes(word)) return true;
    }
    return false;
};

const wordSearch = (letters, word) => {
    if (letters.length === 0) return 'This Matrix is Empty';
    if (skimsThroughMatrix(letters, word)) return true;
    const transposedMatrix = transpose(letters);
    if (skimsThroughMatrix(transposedMatrix, word)) return true;

    return false;
};

module.exports = wordSearch;