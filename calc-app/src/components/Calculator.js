
function calc(a, b, operation){
    const hexTag = "0x";
    const digitA = parseInt(hexTag.concat(a));
    const digitB = parseInt(hexTag.concat(b));

    let result;

    switch(operation){
        case '+':
            result = digitA + digitB;
            break;
        case '-':
            result = digitA - digitB;
            break;
        case '*':
            result = digitA * digitB;
            break;
        case '/':
            if(digitB === 0) throw new Error("Cannot Divide by 0");
            result = Math.floor(digitA/digitB);
            break;
        default:
            throw new Error("Invalid operation");
    }

    if(result < 0 || result > 0xFFFF){
        throw new Error("Result out of bounds");
    }

    return result.toString(16).toUpperCase();
}

module.exports = calc;