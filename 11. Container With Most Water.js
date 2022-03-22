/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let hashTable = [],
        countSort = [];
    const __MAX__ = Math.pow(10, 4);

    for (let i = 0; i <= __MAX__; i++) {
        hashTable[i] = { __max__: -Infinity, __min__: Infinity };
        countSort[i] = 0;
    }

    for (let i = 0; i < height.length; i++) {
        hashTable[height[i]].__max__ = Math.max(
            hashTable[height[i]].__max__,
            i
        );
        hashTable[height[i]].__min__ = Math.min(
            hashTable[height[i]].__min__,
            i
        );
        countSort[height[i]] = 1;
    }

    // return {
    //     hash: hashTable,
    //     sorted: countSort,
    // };

    let result = 0;
    let prevState = { __max__: -Infinity, __min__: Infinity };

    for (let i = __MAX__; i >= 0; i--) {
        if (countSort[i]) {
            prevState.__max__ = Math.max(
                hashTable[i].__max__,
                prevState.__max__
            );
            prevState.__min__ = Math.min(
                hashTable[i].__min__,
                prevState.__min__
            );
            result = Math.max(
                result,
                (prevState.__max__ - prevState.__min__) * i
            );
        }
    }

    return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
