module.exports = function toReadable(number) {
    const numDict20 = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty ",
    };
    const numDict100 = {
        2: "twenty ",
        3: "thirty ",
        4: "forty ",
        5: "fifty ",
        6: "sixty ",
        7: "seventy ",
        8: "eighty ",
        9: "ninety ",
    };

    function less99(number) {
        if (number <= 20) {
            if (number % 10 === 0) {
                return number === 0 ? "zero" : numDict20[number];
            } else {
                return numDict20[number];
            }
        } else if (number < 100 && number > 20) {
            return numDict100[Math.trunc(number / 10)] + numDict20[number % 10];
        }
    }

    if (number < 100) {
        return less99(number).trim();
    } else if (number < 1000) {
        if (number % 100 === 0) {
            return numDict20[number / 100] + " hundred";
        } else {
            console.log(number % 100);
            return (
                numDict20[Math.trunc(number / 100)] +
                " hundred " +
                less99(number % 100)
            ).trim();
        }
    }
};
