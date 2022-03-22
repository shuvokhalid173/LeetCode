/**
 * @param {string} s
 * @return {boolean}
 * @input {'[{(*)}]'}
 */
var isValid = function (s) {
    let stack = [];
    let bracketOpen = ["(", "{", "["];
    let bracketClose = [")", "}", "]"];
    let fb = 0,
        lb = 0;

    for (let i = 0; i < s.length; i++) {
        if (bracketClose.indexOf(s[i]) != -1) {
            lb++;
        } else {
            fb++;
        }
    }

    if (lb != fb) {
        return false;
    }

    let bracketObject = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        if (bracketOpen.indexOf(s[i]) != -1) {
            stack.push(s[i]);
        }

        if (bracketClose.indexOf(s[i]) != -1) {
            if (stack.length == 0) {
                return false;
            }

            let last = stack.pop();
            if (bracketObject[last] != s[i]) {
                return false;
            }
        }
    }

    return true;
};

console.log(isValid("()"));
