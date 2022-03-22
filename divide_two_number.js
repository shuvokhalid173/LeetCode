/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (!dividend || !divisor) return 0;
    let range = Math.pow(2, 31) - 1;
    let isNegativeResult = false;

    if (dividend < 0 || divisor < 0) {
        isNegativeResult = true;
    }
    if (dividend < 0 && divisor < 0) {
        isNegativeResult = false;
    }

    range = isNegativeResult ? range + 1 : range;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = processedResult(dividend, divisor);

    result = result > range ? range : result;
    result = !isNegativeResult ? result : "-" + result;
    return result;
};

let processedResult = function (dividend, divisor) {
    let mainResult = 0;

    while (dividend >= divisor) {
        let divisorTemp = divisor;
        let initValue = 0;
        let result = 0;
        let initResult = 1;

        while (1) {
            divisorTemp += initValue;
            result += initResult;
            if (divisorTemp > dividend) {
                divisorTemp -= initValue;
                result -= initResult;
                mainResult += result;
                dividend -= divisorTemp;
                break;
            }
            initResult = result;
            initValue = divisorTemp;
        }
    }

    return mainResult;
};
